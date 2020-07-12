import { DOMelements } from "./../base";
import { state } from "./../state";

export function scoreUpdate() {
  DOMelements.gameScore.textContent = state.score;
}

export function timeUpdate() {
  DOMelements.gameTime.textContent = state.time;
}

export function displayPoints() {
  DOMelements.gamePoints.textContent = state.score;
}
