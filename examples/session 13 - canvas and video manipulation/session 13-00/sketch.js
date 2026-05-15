/*
||||||||||||||||||||||||||||||||||||||||||
||       Canvas Transformations         ||
||||||||||||||||||||||||||||||||||||||||||

Rotating and scaling around a center point

*/

//Create a p5.Image object to store image
let tuna; //Declares p5.Image object called tuna

//Load image assets into preload()
function preload() 
{
	tuna = loadImage("images/tuna.png"); 
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER); //draws images from center point
  rectMode(CENTER);
  angleMode(DEGREES);

}

function draw() {
  background(0);

  let x = width/2;
  let y = height/2;

  rect(x, y, tuna.width/2, tuna.height/2);

  if(mouseIsPressed) {
    drawFlippedImage(tuna, x, y, tuna.width/2, tuna.height/2);
  }
  else if(keyIsPressed){
    drawRotatedImage(frameCount, tuna, x, y, tuna.width/2, tuna.height/2);
  }
  else {
    image(tuna, x, y, tuna.width/2, tuna.height/2);
  }
}

// draw an image flipped horizontally
function drawFlippedImage(img, x, y, imageWidth, imageHeight) {

  push();
  translate(x*2, 0);
  scale(-1, 1);
  image(img, x, y, imageWidth, imageHeight);
  pop();

}

// draw an image rotated
function drawRotatedImage(degrees, img, x, y, imageWidth, imageHeight) {

  push();
  translate(x, y);
  rotate(degrees);
  image(img, 0, 0, imageWidth, imageHeight);
  pop();

}

