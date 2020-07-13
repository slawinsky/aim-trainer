import "./../scss/index.scss";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { DOMelements } from "./base";
import { LevelSelect } from "./model/LevelSelect";
import { GameBoard } from "./model/GameBoard";
import { GameStart } from "./model/GameStart";

const init = () => {
  const levelSelect = new LevelSelect();
  const gameBoard = new GameBoard();
  const gameStart = new GameStart();

  DOMelements.playBtn.addEventListener("click", () => {
    levelSelect.renderLevelSelectView();
  });

  DOMelements.levelBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      gameBoard.renderGameBoard();
      gameStart.startGame();
    })
  );
};

document.addEventListener("DOMContentLoaded", init);
