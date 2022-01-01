import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import userEvents from "@testing-library/user-event";
import Dashboard from "./Dashboard";
import { AppProviders } from "../../AppProviders";

afterEach(() => {
  jest.clearAllMocks();
});

test("renders Game component correctly", () => {
  const setGameMode = jest.fn();
  render(<Dashboard setGameMode={setGameMode} />, { wrapper: AppProviders });

  const page = screen.getByTestId("dashboard-page");
  const header = screen.getByTestId("dashboard-header");
  const subheader = screen.getByTestId("dashboard-subheader");
  const soloBtn = screen.getByTestId("solo-button");
  const autoPlayBtn = screen.getByTestId("auto-play-button");

  expect(setGameMode).toHaveBeenCalledTimes(1);
  expect(setGameMode).toHaveBeenCalledWith("not-set");
  expect(page).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(header).toMatchInlineSnapshot(`
    <h1
      class="ant-typography"
      data-testid="dashboard-header"
    >
      Welcome To Rock, Paper, Scessior Game
    </h1>
  `);
  expect(subheader).toBeInTheDocument();
  expect(subheader).toMatchInlineSnapshot(`
    <h3
      class="ant-typography"
      data-testid="dashboard-subheader"
    >
      Choose The Game Mode
    </h3>
  `);
  expect(soloBtn).toBeInTheDocument();
  expect(autoPlayBtn).toBeInTheDocument();
});

test("should call setGameMode with solo mode", async () => {
  const setGameMode = jest.fn();
  render(<Dashboard setGameMode={setGameMode} />, { wrapper: AppProviders });
  setGameMode.mockClear();
  const soloBtn = screen.getByTestId("solo-button");

  act(() => {
    userEvents.click(soloBtn);
  });
  await waitFor(() => {
    expect(setGameMode).toHaveBeenCalledTimes(1);
    expect(setGameMode).toHaveBeenCalledWith("solo");
  });
});

test("should call setGameMode with auto play mode", async () => {
  const setGameMode = jest.fn();
  render(<Dashboard setGameMode={setGameMode} />, { wrapper: AppProviders });
  setGameMode.mockClear();
  const autoPlayBtn = screen.getByTestId("auto-play-button");

  act(() => {
    userEvents.click(autoPlayBtn);
  });
  await waitFor(() => {
    expect(setGameMode).toHaveBeenCalledTimes(1);
    expect(setGameMode).toHaveBeenCalledWith("auto");
  });
});
