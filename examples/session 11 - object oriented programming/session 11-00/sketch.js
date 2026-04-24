/*
DEMO on OOP: creating literal objects 

__________________________________________________________
BASIC PSEUDOCODE:

let objectName = {
  propertyA: <value>,
  propertyB: <value>
}

object.propertyA
__________________________________________________________
*/

//set up object
let movingRect = {
  x: 0,
  y: 0,
  width: 40,
  height:40
}

let left = true;
let moveRate = 2;

function setup() 
{
  createCanvas (500, 500);
  rectMode(CENTER);
  fill("lightblue");
  noStroke();

  // assign new values to object variables
  movingRect.x = width/2;
  movingRect.y = height/2;
	
}

function draw() 
{
  background(240);
	
	rect(movingRect.x, movingRect.y, movingRect.width, movingRect.height);

  if(getRectRight(movingRect) < width && left) {
    movingRect.x += moveRate;
  }
  else {
    movingRect.x -= moveRate;

    if(left) {
      left = !left;
    }
    else if (getRectLeft(movingRect) <= 0) {
      left = true;
    }
  }

}
function getRectLeft(rectangle) {
  return rectangle.x - rectangle.width/2;
}

function getRectRight(rectangle) {
  return rectangle.x + rectangle.width/2;
}



