import { DOMelements } from "../base";

export class GameBoard {
  constructor() {}

  clearContainer() {
    DOMelements.levelSelect.style.display = "none";
  }

  renderGameBoard() {
    this.clearContainer();
    DOMelements.gameSummary.style.display = "flex";
    DOMelements.gameBoard.style.display = "flex";
  }
}
