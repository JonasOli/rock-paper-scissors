import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from ".";

describe("Main page", () => {
  it("should display three play buttons", () => {
    render(<App />);

    const playButtons = screen.getAllByTestId(/play-button/);

    expect(playButtons).toHaveLength(3);
  });

  it("should show the rules container after clicking the button", () => {
    render(<App />);

    const ruleButton = screen.getByTestId("rules-button");

    fireEvent.click(ruleButton);

    const rulesContainer = screen.getByTestId("rules-container");

    expect(rulesContainer).toBeVisible();
  });
});
