import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Score from "./Score";

test("renders Score component correctly", () => {
  const setScore = jest.fn();
  render(<Score score={{ wins: 0, loses: 0 }} setScore={setScore} />);

  const banner = screen.getByTestId("score-banner");
  const heading = within(banner).getByRole("heading", {
    name: /score/i,
  });
  const resetButton = screen.getByRole("button", { name: /reset the game/i });
  const scorePlayerOne = screen.getByTestId("player-one-score");
  const scorePlayerTwo = screen.getByTestId("player-two-score");

  expect(banner).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
  expect(scorePlayerOne).toHaveTextContent(/0/i);
  expect(scorePlayerTwo).toHaveTextContent(/0/i);
});

test("user rest game's score", () => {
  const setScore = jest.fn();
  render(<Score score={{ wins: 5, loses: 1 }} setScore={setScore} />);
  const resetButton = screen.getByRole("button", { name: /reset the game/i });
  userEvents.click(resetButton);
  expect(setScore).toHaveBeenCalledTimes(1);
  expect(setScore).toHaveBeenCalledWith("not-set");
});
