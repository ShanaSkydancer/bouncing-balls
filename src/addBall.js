import { Ball, clearCanvas } from './ball.js'

let balls = [];
let count = 0;

export const addBall = () => {
  let colour = "#FF007F";
  let w = 600;
  let h = 600;

  let new_x = Math.floor(Math.random() * w);
  let new_y = Math.floor(Math.random() * h);
  let new_r = 10;
  let new_vx = 5;
  let new_vy = 5;

  if (count < 20) {
    balls[count] = new Ball(new_x, new_y, new_r, colour, new_vx, new_vy);
    count++;
  }
};

const update = () => {
  let i;
  clearCanvas();
  for (i = 0; i < count; i++) {
    balls[i].update();
  }
};

setInterval(update, 1000/60);
