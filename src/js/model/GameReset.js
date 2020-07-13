import { state } from "./../state";
import { DOMelements } from "./../base";

import { LevelSelect } from "./LevelSelect";

const levelSelect = new LevelSelect();

export class GameReset {
  renderLevelSelect() {
    this.clearContainer();
    levelSelect.renderLevelSelectView();
  }

  resetState() {
    state.level = "";
    state.misses = 0;
    state.score = 0;
    state.time = "00:00";

    this.renderLevelSelect();
  }

  clearContainer() {
    DOMelements.gameResults.style.display = "none";
  }
}
