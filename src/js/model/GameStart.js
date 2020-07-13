import { DOMelements } from "../base";
import { GameControler } from "./GameControler";

const gameControler = new GameControler();

export class GameStart {
  constructor() {
    this.counter = 3;
  }

  gameCountdown() {
    const interval = setInterval(() => {
      DOMelements.gameBoard.innerHTML = `<p class="counter">${this.counter}</p>`;
      if (this.counter !== 0) {
        this.counter--;
      } else {
        DOMelements.gameBoard.innerHTML = `<p class="counter">start!</p>`;
        clearInterval(interval);
        this.counter = 3;
      }
    }, 1000);
  }

  startGame() {
    this.gameCountdown();
    setTimeout(() => {
      DOMelements.gameBoard.lastChild.remove();
      DOMelements.gameBoard.style.display = "block";
      gameControler.gameProperties();
    }, 5000);
  }
}
