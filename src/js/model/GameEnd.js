import { DOMelements } from "./../base";

import { displayPoints } from "./../view/summaryView";
import { GameReset } from "./../model/GameReset";

const gameReset = new GameReset();

export class GameEnd {
  constructor() {
    this.gameReset();
  }

  gameReset() {
    DOMelements.resetBtn.onclick = () => {
      gameReset.resetState();
    };
  }

  renderResults() {
    displayPoints();
  }

  clearContainer() {
    DOMelements.gameSummary.style.display = "none";
    DOMelements.gameBoard.style.display = "none";
  }

  renderResultsBoard() {
    this.clearContainer();
    DOMelements.gameResults.style.display = "flex";
    this.renderResults();
  }
}
