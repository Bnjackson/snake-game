"use strict";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
//The CanvasRenderingContext2D interface, part of the Canvas API, provides the 2D rendering context for the drawing surface of a <canvas> element. CTX is short for context.

canvas.width = canvas.height = 600;

let snake = [  {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150},];

function drawSnakePart(snakePart) {  ctx.fillStyle = 'lightgreen';  ctx.strokestyle = 'darkgreen';
ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);}

function drawSnake() {  snake.forEach(drawSnakePart);}
