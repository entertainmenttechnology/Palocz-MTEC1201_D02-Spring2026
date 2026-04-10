/*
	"Warmup Fractals -- interactive variation"
	A modification of the Session 9 warmup exercise code,
  that uses an internal while loop and adds mouse interaction.
*/

const canvasSize = 500;

function setup() {
	createCanvas(canvasSize, canvasSize);
}

function draw() {
  background("white");

  let rSize = canvasSize - 1;

  while(rSize > 1) {
    let smallSize = rSize * 2/3;

    nestedRect(0, 0, rSize, smallSize);
    nestedRect(0, 0, smallSize, rSize);

    rSize = smallSize;

  }
}

// divide given value a by 2/3
function applyRatio(a) {
  return a * 2 / 3;
}

// draw a rectangle with a nested square 
function nestedRect(x, y, w, h) {
	fill("white");
	rect(x, y, w, h);

	if(w < h) {
      // change fill color if the mouse is inside the square
    if(mouseX < w && mouseY < w) {
      fill("black");
    }
		rect (x, y, w, w);
	} else {
		rect (x, y, h, h);
	}
}