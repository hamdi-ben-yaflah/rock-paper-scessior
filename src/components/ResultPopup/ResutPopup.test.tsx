import React from "react";
import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import ResultPopup from "./ResultPopup";
import { IChoice } from "../../typings/game";

test("renders ResultPopup component correctly", () => {
  const playAgain = jest.fn();
  const choiceOne: IChoice = {
    id: 1,
    name: "rock",
    component: null,
    beats: 3,
  };
  const choiceTwo: IChoice = {
    id: 2,
    name: "paper",
    component: null,
    beats: 1,
  };

  render(
    <ResultPopup
      status="error"
      title="You lose"
      choiceOne={choiceOne}
      choiceTwo={choiceTwo}
      playAgain={playAgain}
      isModalVisible
    />
  );
  const popup = screen.getByTestId("result-popup");
  const playerOneChoice = screen.getByTestId("player-one-choice");
  const playerTwoChoice = screen.getByTestId("player-two-choice");
  const textResult = screen.getByText(/you lose/i);
  expect(popup).toBeInTheDocument();
  expect(textResult).toBeInTheDocument();
  expect(playerOneChoice).toBeInTheDocument();
  expect(playerTwoChoice).toBeInTheDocument();
});

test("users should able to play again", () => {
  const playAgain = jest.fn();
  const choiceOne: IChoice = {
    id: 1,
    name: "rock",
    component: null,
    beats: 3,
  };
  const choiceTwo: IChoice = {
    id: 2,
    name: "paper",
    component: null,
    beats: 1,
  };

  render(
    <ResultPopup
      status="error"
      title="You lose"
      choiceOne={choiceOne}
      choiceTwo={choiceTwo}
      playAgain={playAgain}
      isModalVisible
    />
  );
  const playAgainButton = screen.getByRole("button", { name: /play again/i });
  userEvents.click(playAgainButton);
  expect(playAgain).toHaveBeenCalledTimes(1);
});
