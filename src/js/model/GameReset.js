import { state } from "./../state";
import { DOMelements } from "./../base";

import { LevelSelect } from "./LevelSelect";
import { scoreUpdate, timeUpdate } from "./../view/summaryView";

const levelSelect = new LevelSelect();

export class GameReset {
  renderLevelSelect() {
    this.clearContainer();
    levelSelect.renderLevelSelectView();
  }

  resetSummary() {
    scoreUpdate();
    timeUpdate();
  }

  resetState() {
    state.level = "";
    state.misses = 0;
    state.score = 0;
    state.time = "00:00";

    this.resetSummary();
    this.renderLevelSelect();
  }

  clearContainer() {
    DOMelements.gameResults.style.display = "none";
  }
}
