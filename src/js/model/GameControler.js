import { DOMelements } from "./../base";
import { state } from "./../state";

export class GameControler {
  constructor() {
    this.gameLevel = state.level;
    this.frequency = null;
    this.targets = [];
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
  }

  targetHit() {
    this.targets.forEach((target) =>
      target.addEventListener("click", () => {
        target.style.display = "none";
      })
    );
  }

  targetCollect() {
    this.targets = [...document.querySelectorAll(".target")];

    this.targetHit();
  }

  targetCreate() {
    const gameBoardWidth = DOMelements.gameBoard.clientWidth;
    const gameBoardHeight = DOMelements.gameBoard.clientHeight;

    const interval = setInterval(() => {
      const offsetX = Math.floor(Math.random() * (gameBoardWidth - 25));
      const offsetY = Math.floor(Math.random() * (gameBoardHeight - 25));

      const target = document.createElement("div");
      target.classList.add("target");

      target.style = `left: ${offsetX}px; top: ${offsetY}px;`;

      DOMelements.gameBoard.appendChild(target);
      this.targetCollect();
    }, this.frequency);
  }
}
