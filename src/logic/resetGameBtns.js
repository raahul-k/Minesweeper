import setupGame from "./setupGame";

const resetGameBtns = (tiles, colors, playAgainBtn, resetBtn) => {
  playAgainBtn.addEventListener("click", () => {
    if (setupGameRunning) {
      return;
    } else {
      setupGameRunning = false;
      setupGame();
    }
  });

  resetBtn.addEventListener("click", () => {
    if (setupGameRunning) {
      return;
    } else {
      setupGameRunning = false;
      setupGame();
    }
  });
};

export default resetGameBtns;
import { setupGameRunning } from "./setupGame";
