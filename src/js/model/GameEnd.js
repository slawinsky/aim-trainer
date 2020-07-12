import { DOMelements } from "./../base";

import { displayPoints } from "./../view/summaryView";

export class GameEnd {
  constructor() {}

  renderResults() {
    displayPoints();
  }

  clearContainer() {
    DOMelements.gameBoard.style.display = "none";
    DOMelements.gameSummary.style.display = "none";
  }

  renderResultsBoard() {
    this.clearContainer();
    DOMelements.gameResults.style.display = "flex";
    this.renderResults();
  }
}
