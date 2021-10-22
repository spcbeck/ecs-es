import './style.css'

import World from './world';
import Canvas from './components/canvas';


let isGamePaused = false;
let gameSpeed = 100;

const canvasElement = document.querySelector("#game") as HTMLCanvasElement;

let canvasOptions = {
  // canvas: canvasElement,
  // width: canvasElement?.width || 800,
  // height: canvasElement?.height || 800,
  // context: canvasElement?.getContext("2d") as CanvasRenderingContext2D,
  // tileSize: 10,
  // tilesX: canvasElement?.width / 10 || 800 / 10,
  // tilesY: canvasElement?.height / 10 || 800 / 10,
  fillStyle: "rgb(100, 240, 150)",
  strokeStyle: "rgb(90, 90, 90)",
  lineWidth: 1
}

let world = new World();

// let canvas = new Canvas(canvasOptions);
// world.addEntity(canvas);
// canvas.board = canvas.prepareBoard();

// const drawAll = () => {
//   canvas.clearBoard();
//   canvas.drawBoard();
//   canvas.drawBorders();
// }
// const nextStep = () => {
//   if (isGamePaused) {
//     return;
//   }
//   drawAll();
//   canvas.stepForward();
// }

// nextStep();

// setInterval(() => {
//   nextStep();
// }, gameSpeed);

// document.addEventListener("keydown", e => {
//   if (e.key === 'p') {
//       isGamePaused = !isGamePaused;
//   } else if (e.key === "+") {
//       gameSpeed = Math.max(50, gameSpeed - 50);
//   } else if (e.key === '-') {
//       gameSpeed = Math.min(2000, gameSpeed + 50);
//   } else if (e.key === 'r') {
//       canvas.board = canvas.prepareBoard();
//       drawAll();
//   }
// });