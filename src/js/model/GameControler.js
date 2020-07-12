import { DOMelements } from "./../base";
import { state } from "./../state";

import { scoreUpdate, timeUpdate } from "./../view/summaryView";
import { GameEnd } from "./GameEnd";

const gameEnd = new GameEnd();

export class GameControler {
  constructor() {
    this.frequency = null;
    this.target = null;
  }

  gameTime() {
    let seconds = 0;
    let minutes = 0;

    setInterval(() => {
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

  gameProperties() {
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

    this.gameTime();
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
    DOMelements.gameBoard.addEventListener("click", (e) => {
      e.target == DOMelements.gameBoard && state.misses++;
    });
  }

  targetCreate() {
    const gameBoardWidth = DOMelements.gameBoard.clientWidth;
    const gameBoardHeight = DOMelements.gameBoard.clientHeight;

    const interval = setInterval(() => {
      if (state.misses == 3) {
        clearInterval(interval);
        gameEnd.renderResultsBoard();
      } else {
        this.targetRemove();

        const offsetX = Math.floor(Math.random() * (gameBoardWidth - 25));
        const offsetY = Math.floor(Math.random() * (gameBoardHeight - 25));

        const target = document.createElement("div");
        target.classList.add("target");

        target.style = `left: ${offsetX}px; top: ${offsetY}px;`;

        DOMelements.gameBoard.appendChild(target);

        this.target = document.querySelector(".target");

        this.target.onclick = () => {
          this.targetHit();
        };
      }
    }, this.frequency);

    this.targetMiss();
  }
}
