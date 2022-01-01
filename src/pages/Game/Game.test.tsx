import React from "react";
import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Game from "./Game";
import { AppProviders } from "../../AppProviders";

test("renders Game component correctly", () => {
  const setScore = jest.fn();
  render(<Game setScore={setScore} />, { wrapper: AppProviders });

  //   const popup = screen.getByTestId("username-popup");
  //   expect(popup).toBeInTheDocument();
});

// test("users should set their username correctly", () => {
//   const setUsername = jest.fn();
//   render(<Game setUsername={setUsername} isModalVisible />);
//   const input = screen.getByRole("textbox");
//   const saveButton = screen.getByText(/save/i);

//   userEvents.type(input, "random-username");
//   userEvents.click(saveButton);

//   expect(setUsername).toHaveBeenCalledTimes(1);
//   expect(setUsername).toHaveBeenCalledWith("random-username");
// });
