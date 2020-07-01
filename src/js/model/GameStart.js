import { DOMelements } from "./../base";

export class GameStart {
  constructor() {
    this.counter = 3;
    this.message = "start!";
  }

  gameCountdown() {
    const interval = setInterval(() => {
      DOMelements.gameBoard.innerHTML = `<p class="counter">${this.counter}</p>`;
      if (this.counter !== 0) {
        this.counter--;
      } else {
        DOMelements.gameBoard.innerHTML = `<p class="counter">${this.message}</p>`;
        clearInterval(interval);
      }
    }, 1000);
  }

  startGame() {
    this.gameCountdown();
    setTimeout(() => {
      DOMelements.gameBoard.lastChild.remove();
    }, 5000);
  }
}
