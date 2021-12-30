import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

window.matchMedia =
  window.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

test("renders learn react link", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /welcome to rock, paper, scessior game/i,
  });
  expect(heading).toBeInTheDocument();
});
