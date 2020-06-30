import "./../scss/index.scss";

import { DOMelements } from "./base";
import { LevelSelect } from "./model/LevelSelect";
import { GameBoard } from "./model/GameBoard";

const init = () => {
  const levelSelect = new LevelSelect();
  const gameBoard = new GameBoard();

  DOMelements.playBtn.addEventListener("click", () => {
    levelSelect.renderLevelSelectView();
  });

  DOMelements.levelBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      gameBoard.renderGameBoard();
    })
  );
};

document.addEventListener("DOMContentLoaded", init);
