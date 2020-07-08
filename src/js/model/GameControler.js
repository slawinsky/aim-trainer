import { DOMelements } from "./../base";
import { state } from "./../state";

import { scoreUpdate } from "./../view/summaryView";

export class GameControler {
  constructor() {
    this.gameLevel = state.level;
    this.frequency = null;
    this.target = null;
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

    this.targetCreate();
    this.targetMiss();
  }

  targetHide() {
    const timeout = setTimeout(() => {
      this.target.remove();
    }, this.frequency - 5);

    this.target.onclick = () => {
      clearTimeout(timeout);
      this.target.remove();
      state.score++;
      scoreUpdate();
    };
  }

  targetMiss() {
    DOMelements.gameBoard.addEventListener("click", (e) => {
      e.target == DOMelements.gameBoard && state.misses++;
    });
  }

  targetCollect() {
    this.target = document.querySelector(".target");
    this.targetHide();
  }

  targetCreate() {
    const gameBoardWidth = DOMelements.gameBoard.clientWidth;
    const gameBoardHeight = DOMelements.gameBoard.clientHeight;

    const interval = setInterval(() => {
      const offsetX = Math.floor(Math.random() * (gameBoardWidth - 25));
      const offsetY = Math.floor(Math.random() * (gameBoardHeight - 25));

      state.misses == 3 && clearInterval(interval);

      const target = document.createElement("div");
      target.classList.add("target");

      target.style = `left: ${offsetX}px; top: ${offsetY}px;`;

      DOMelements.gameBoard.appendChild(target);
      this.targetCollect();
    }, this.frequency);
  }
}
