
let x = 0;
let y = 0;
let size = 20;

let movingRight = true;

function setup() {
  debugger;
  createCanvas(400, 400);
}

function draw() {
  debugger;
  background(220);

  square(x, y, size);

  if(movingRight) {
    x++;
  }
  else {
    x--;
  }
  
}
