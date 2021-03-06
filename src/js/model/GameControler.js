import { DOMelements } from "./../base";
import { state } from "./../state";

import { scoreUpdate, timeUpdate } from "./../view/summaryView";
import { GameEnd } from "./GameEnd";

const gameEnd = new GameEnd();

export class GameControler {
  constructor() {
    this.frequency = null;
    this.target = null;
    this.isGameActive = false;
    this.missesLimit = 3;

    this.gameCancel();
  }

  gameCancel() {
    DOMelements.cancelBtn.onclick = () => {
      this.isGameActive = false;
      console.log(this.isGameActive);
    };
  }

  gameTimer() {
    let seconds = 0;
    let minutes = 0;
    const timer = setInterval(() => {
      !this.isGameActive && clearInterval(timer);

      if (seconds < 59) {
        seconds++;
      } else if (seconds == 59) {
        minutes++;
        seconds = 0;
      }

      state.time = `${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;
      timeUpdate();
    }, 1000);
  }

  gameSettings() {
    switch (state.level) {
      case "easy":
        this.frequency = 2000;
        break;
      case "medium":
        this.frequency = 1000;
        break;
      case "hard":
        this.frequency = 500;
        break;
    }

    this.isGameActive = true;
    this.gameTimer();
    this.targetCreate();
  }

  targetRemove() {
    this.target && this.target.remove();
  }

  targetHit() {
    this.targetRemove();
    state.score++;
    scoreUpdate();
  }

  targetMiss() {
    state.misses++;
  }

  targetCreate() {
    const gameBoardWidth = DOMelements.gameBoard.clientWidth;
    const gameBoardHeight = DOMelements.gameBoard.clientHeight;

    const targetWidth = 25;
    const targetHeight = 25;

    const interval = setInterval(() => {
      if (state.misses == this.missesLimit || this.isGameActive == false) {
        this.isGameActive = false;
        clearInterval(interval);
        this.targetRemove();
        gameEnd.renderResultsBoard();
      } else {
        this.targetRemove();

        const offsetX = Math.floor(
          Math.random() * (gameBoardWidth - targetWidth)
        );
        const offsetY = Math.floor(
          Math.random() * (gameBoardHeight - targetHeight)
        );

        const target = document.createElement("div");
        target.classList.add("target");

        target.style = `left: ${offsetX}px; top: ${offsetY}px;`;

        DOMelements.gameBoard.appendChild(target);

        this.target = document.querySelector(".target");

        DOMelements.gameBoard.onclick = (e) => {
          e.target == DOMelements.gameBoard && this.targetMiss();
        };

        this.target.onclick = () => {
          this.targetHit();
        };
      }
    }, this.frequency);
  }
}
