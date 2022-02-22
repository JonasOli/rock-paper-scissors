import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import GameBoard from ".";

describe("<GameBoard />", () => {
  describe("Test results", () => {
    afterEach(() => {
      jest.spyOn(global.Math, "floor").mockRestore();
    });

    it("should display that the player won the match when selecting ROCK", async () => {
      jest.spyOn(global.Math, "floor").mockReturnValue(3);

      render(<GameBoard />);

      const rockPlayButton = screen.getByTestId("rock-play-button");

      fireEvent.click(rockPlayButton);

      // const resultText = await screen.findByTestId("result-text");

      // console.log(resultText, "resultText");

      // expect(resultText.innerText).toEqual("You won");
    });

    // it("should display that the player won the match when selecting PAPER", async () => {
    //   jest.spyOn(global.Math, "floor").mockReturnValue(1);

    //   render(<App />);

    //   const paperPlayButton = screen.getByTestId("paper-play-button");

    //   fireEvent.click(paperPlayButton);

    //   setTimeout(async () => {
    //     const resultText = await screen.findByText(/You won/);

    //     expect(resultText).toBeVisible();
    //   }, 0);
    // });

    // it("should display that the player won the match when selecting SCISSORS", async () => {
    //   jest.spyOn(global.Math, "floor").mockReturnValue(3);

    //   render(<App />);

    //   const paperPlayButton = screen.getByTestId("scissors-play-button");

    //   fireEvent.click(paperPlayButton);

    //   setTimeout(async () => {
    //     const resultText = await screen.findByText(/You won/);

    //     expect(resultText).toBeVisible();
    //   }, 0);
    // });
  });
});
