import { DOMelements } from "../base";
import { state } from "../state";

export class LevelSelect {
  constructor() {
    this.selectLevel();
  }

  clearContainer() {
    DOMelements.playBtn.style.display = "none";
  }

  renderLevelSelectView() {
    this.clearContainer();
    DOMelements.levelSelect.style.display = "block";
  }

  saveSelectedLevel(selectedLevel) {
    state.level = selectedLevel;
  }

  selectLevel() {
    DOMelements.levelBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.saveSelectedLevel(btn.dataset.level);
      });
    });
  }
}
