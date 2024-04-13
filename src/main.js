import "../styles/style.css";
import "../styles/components/arena.css";
import "../styles/components/sidebar.css";
import "../styles/utils.css";

let tiles = document.querySelectorAll(".tile"); //Select the tiles so they can be clicked
let playAgainBtn = document.querySelector(".play-again-btn");
let resetBtn = document.querySelector(".reset-btn");

const colors = {
  grape: getComputedStyle(document.documentElement).getPropertyValue(
    "--clr-grape"
  ),
  blush: getComputedStyle(document.documentElement).getPropertyValue(
    "--clr-blush"
  ),
  magenta: getComputedStyle(document.documentElement).getPropertyValue(
    "--clr-magenta"
  ),
  tile: getComputedStyle(document.documentElement).getPropertyValue(
    "--clr-tile"
  ),
  white: getComputedStyle(document.documentElement).getPropertyValue(
    "--clr-white"
  ),
  lavender: getComputedStyle(document.documentElement).getPropertyValue(
    "--clr-lavender"
  ),
  mine: getComputedStyle(document.documentElement).getPropertyValue(
    "--clr-mine"
  ),
  win: getComputedStyle(document.documentElement).getPropertyValue("--clr-win"),
  lightblush: getComputedStyle(document.documentElement).getPropertyValue(
    "--clr-blush"
  ),
};

import setupGame from "./logic/setupGame";
setupGame(tiles, colors);

import resetGameBtns from "./logic/resetGameBtns";
resetGameBtns(tiles, colors, playAgainBtn, resetBtn);
