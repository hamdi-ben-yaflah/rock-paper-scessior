import React from "react";
import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import UsernamePopup from "./UsernamePopup";

test("renders UsernamePopup component correctly", () => {
  const setUsername = jest.fn();
  render(<UsernamePopup setUsername={setUsername} isModalVisible />);

  const popup = screen.getByTestId("username-popup");
  expect(popup).toBeInTheDocument();
});

test("users should set their username correctly", () => {
  const setUsername = jest.fn();
  render(<UsernamePopup setUsername={setUsername} isModalVisible />);
  const input = screen.getByRole("textbox");
  const saveButton = screen.getByText(/save/i);

  userEvents.type(input, "random-username");
  userEvents.click(saveButton);

  expect(setUsername).toHaveBeenCalledTimes(1);
  expect(setUsername).toHaveBeenCalledWith("random-username");
});
