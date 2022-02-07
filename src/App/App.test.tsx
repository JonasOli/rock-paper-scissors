import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

describe("Main page", () => {
  it("should display three play buttons", async () => {
    render(<App />);

    const playButtons = await screen.findAllByTestId("play-button");

    expect(playButtons.length).toEqual(3);
  });
});
