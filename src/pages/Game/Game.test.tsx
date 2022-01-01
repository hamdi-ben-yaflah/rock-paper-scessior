import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import userEvents from "@testing-library/user-event";
import Game from "./Game";
import { AppProviders } from "../../AppProviders";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

afterEach(() => {
  jest.clearAllMocks();
});

test("renders Game component correctly", () => {
  const setScore = jest.fn();
  render(<Game setScore={setScore} />, { wrapper: AppProviders });

  const page = screen.getByTestId("game-page");
  const header = screen.getByTestId("game-header");
  const usernameLabel = screen.getByTestId("username-label");
  const rockIcon = screen.getByTestId("rock");
  const paperIcon = screen.getByTestId("paper");
  const scissorIcon = screen.getByTestId("scissors");
  const questionSignIcon = screen.getByTestId("question-sign");
  const switchGameModeBtn = screen.getByRole("link", {
    name: /switch to auto play mode/i,
  });

  expect(setScore).toHaveBeenCalledTimes(1);
  expect(setScore).toHaveBeenCalledWith("not-set");
  expect(page).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(usernameLabel).toBeInTheDocument();
  expect(rockIcon).toBeInTheDocument();
  expect(paperIcon).toBeInTheDocument();
  expect(scissorIcon).toBeInTheDocument();
  expect(switchGameModeBtn).toBeInTheDocument();
  expect(questionSignIcon).toBeInTheDocument();
});

test("should display 'Username' word if users haven't typed their username", () => {
  const setScore = jest.fn();
  render(<Game setScore={setScore} />, { wrapper: AppProviders });
  const usernameLabel = screen.getByTestId("username-label");
  expect(usernameLabel).toHaveTextContent("Username");
});

test("should display typed username", () => {
  const { result } = renderHook(() => useLocalStorage("username", ""));

  act(() => {
    result.current[1]("test-username");
  });
  const setScore = jest.fn();
  render(<Game setScore={setScore} />, { wrapper: AppProviders });
  const usernameLabel = screen.getByTestId("username-label");
  expect(usernameLabel).toHaveTextContent("test-username");
});

test("should allow user to edit their username", () => {
  const { result } = renderHook(() => useLocalStorage("username", ""));

  const setScore = jest.fn();
  render(<Game setScore={setScore} />, { wrapper: AppProviders });
  const editUsernameButton = screen.getByTestId("edit-username-button");
  userEvents.click(editUsernameButton);

  act(() => {
    result.current[1]("new-test-usename");
  });

  waitFor(() => {
    const usernameLabel = screen.getByTestId("username-label");
    expect(usernameLabel).toHaveTextContent("new-test-usename");
  });
});

test("should call setScore after playing one rounds", async () => {
  renderHook(() => useLocalStorage("username", ""));

  const setScore = jest.fn();
  render(<Game setScore={setScore} />, { wrapper: AppProviders });
  setScore.mockClear();

  const paperIcon = screen.getByTestId("paper");
  act(() => {
    userEvents.click(paperIcon);
  });
  await waitFor(() => {
    expect(setScore).toHaveBeenCalledTimes(1);
  });
});
