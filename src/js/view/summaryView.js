import { DOMelements } from "./../base";
import { state } from "./../state";

export function scoreUpdate() {
  DOMelements.gameScore.textContent = state.score;
}

export function timeUpdate() {
  DOMelements.gameTime.textContent = state.time;
}
