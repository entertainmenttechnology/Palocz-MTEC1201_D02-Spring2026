/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
User-Defined Functions pt.I
 Creating user-defined function for drawing ice cream cones...
 Building off prior example with another function.
 Press mouse to toggle on/off.
 ___________________________________
 FUNCTIONS HAVE THREE PARTS:
 * The word "function"
 * Function name
 * (Optional) parameters
 ___________________________________
 function functionName (parameters){
 statements;
 }
 <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */

 function setup() 
 {
   createCanvas(500, 500);
   textAlign(CENTER);
   textSize(22);
 }
 
 function draw() 
 {
  // debugger;
   background(150);

   
   //call iceCream function with different arguments
   iceCream(random(width), random(height), 65, 170, 230, 180, "MINT"); //mint flavor
   iceCream(random(width), random(height), 75, 250, 170, 210, "BERRY"); //berry flavor
   iceCream(random(width), random(height), 80, 250, 250, 210, "VANILLA");  //vanilla flavor
 }

 function addExclamation(text) {
  return text + "!!!!!!!!!";
 }
 
 function iceCream(x, y, diameter, r, g, b, flavor)
 {
  if(y > width/2) {
    return;
  }
   fill(170, 120, 35);
   triangle(x, y, x + 50, y, x + 25, y + 100);


   fill(r, g, b);
   ellipse(x + 25, y, diameter, diameter);
   
   let exclamationFlavor = addExclamation(flavor);
   text(exclamationFlavor, x + 25, y - 50);
 }