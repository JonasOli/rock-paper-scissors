import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import App from "..";

describe("<GameBoard />", () => {
  describe("Test results", () => {
    afterEach(() => {
      jest.spyOn(global.Math, "floor").mockRestore();
    });

    it("should display that the player won the match when selecting PAPER", async () => {
      jest.spyOn(global.Math, "floor").mockReturnValue(1);

      await act(async () => {
        render(<App />);

        const rockPlayButton = screen.getByTestId("paper-play-button");

        fireEvent.click(rockPlayButton);

        await waitFor(
          async () => {
            const resultText = screen.getByTestId("result-text");

            expect(resultText.textContent).toEqual("You won");
          },
          { timeout: 2500 }
        );
      });
    });

    it("should display that the player won the match when selecting SCISSORS", async () => {
      jest.spyOn(global.Math, "floor").mockReturnValue(2);

      await act(async () => {
        render(<App />);

        const rockPlayButton = screen.getByTestId("scissors-play-button");

        fireEvent.click(rockPlayButton);

        await waitFor(
          async () => {
            const resultText = screen.getByTestId("result-text");

            expect(resultText.textContent).toEqual("You won");
          },
          { timeout: 2500 }
        );
      });
    });

    it("should display that the player won the match when selecting ROCK", async () => {
      jest.spyOn(global.Math, "floor").mockReturnValue(3);

      await act(async () => {
        render(<App />);

        const rockPlayButton = screen.getByTestId("rock-play-button");

        fireEvent.click(rockPlayButton);

        await waitFor(
          async () => {
            const resultText = screen.getByTestId("result-text");

            expect(resultText.textContent).toEqual("You won");
          },
          { timeout: 2500 }
        );
      });
    });

    it("should update the score when the player win the match", async () => {
      jest.spyOn(global.Math, "floor").mockReturnValue(1);

      await act(async () => {
        render(<App />);

        const rockPlayButton = screen.getByTestId("paper-play-button");

        fireEvent.click(rockPlayButton);

        await waitFor(
          async () => {
            const resultText = screen.getByTestId("score-count");

            expect(resultText.textContent).toEqual("1");
          },
          { timeout: 2500 }
        );
      });
    });
  });
});
