import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import userEvents from "@testing-library/user-event";
import { AppProviders } from "../../AppProviders";
import AutoPlay from "./AutoPlay";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

test("renders AutoPlay component correctly", () => {
  const setScore = jest.fn();
  render(<AutoPlay setScore={setScore} />, { wrapper: AppProviders });

  const page = screen.getByTestId("auto-play-page");
  const header = screen.getByTestId("auto-play-header");
  const questionSign1Icon = screen.getByTestId("question-sign-1");
  const questionSign2Icon = screen.getByTestId("question-sign-2");
  const switchGameModeBtn = screen.getByRole("link", {
    name: /switch to solo mode/i,
  });
  const startGameBtn = screen.getByText(/start the game/i);

  expect(setScore).toHaveBeenCalledTimes(1);
  expect(setScore).toHaveBeenCalledWith("not-set");
  expect(page).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(switchGameModeBtn).toBeInTheDocument();
  expect(startGameBtn).toBeInTheDocument();
  expect(questionSign1Icon).toBeInTheDocument();
  expect(questionSign2Icon).toBeInTheDocument();
});

test("should call setScore after starting the game", async () => {
  renderHook(() => useLocalStorage("username", ""));
  const setScore = jest.fn();
  render(<AutoPlay setScore={setScore} />, { wrapper: AppProviders });
  setScore.mockClear();

  const startGameBtn = screen.getByText(/start the game/i);

  act(() => {
    userEvents.click(startGameBtn);
  });
  await waitFor(() => {
    expect(setScore).toHaveBeenCalledTimes(1);
  });
});
