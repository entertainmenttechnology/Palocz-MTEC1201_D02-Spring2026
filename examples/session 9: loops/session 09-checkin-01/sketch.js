/*
	"Warmup Fractals -- while loop variation"
	A modification of the Session 9 warmup exercise code, creating the same
  fractal pattern using a while loop.
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

// draw a rectangle with a nested square 
function nestedRect(x, y, w, h) {
	fill("white");
	rect(x, y, w, h);

	fill("black");
	if(w < h) {
		rect (x, y, w, w);
	} else {
		rect (x, y, h, h);
	}
}