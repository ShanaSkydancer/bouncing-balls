let colour = "#FF007F";
let ballCanvas = document.getElementById("ballCanvas");
let ball = ballCanvas.getContext('2d');
let w = 600;
let h = 600;

export const Ball = (x, y, r, c, vx, vy) => {
  this.x = x;
  this.y = y;
  this.r = r;
  this.vx = vx;
  this.vy = vy;

  this.update = () => {
    ball.beginPath();
    ball.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
    ball.fillStyle = colour;
    ball.fill();
    ball.closePath();

    this.x += this.vx;
    this.y += this.vy;
    if (this.y >= (w - 10) || this.y <= 10) {
      this.vy =- this.vy;
    }
    if (this.x >= (h - 10) || this.x <= 10) {
      this.vx =- this.vx;
    }
  }
};

export const clearCanvas = () => {
  ball.clearRect(0, 0, w, h);
};
