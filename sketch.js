var rotation = 0;
var delta_x, deltay, rotation;
var columns, rows;
var n = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

}

function draw() {
  background(63,70,81);
  columns = 50;
  rows = 50;
  /*translate(columns/2,rows/2);*/
  for(var i = 0; i<width; i+=columns){
    for(var j=0; j<height; j+=rows)
    circles(i,j,10,5)
  }
}

function circles(cx,cy,dist,r) {
  fill(150,182,172);
  noStroke();
  ellipse(cx, cy, r, r);
  if (!is_touch_device()){
    delta_x = mouseX - cx;
    delta_y = cy - mouseY;
  } else {
    delta_x = touchX - cx;
    delta_y = cy - touchY;
  }
  rotation = atan2(delta_y, delta_x);
  // Normalize rotation: before this when passed 180° it becames negative up + -180 corresponding to the full turn
  if (rotation >=0 && rotation <= 180){
    rotation = rotation;
  } else {
    rotation = rotation+360;
  }
  push();
  translate(cx, cy);
  rotate(-rotation);
  fill(60,177,129);
  ellipse(-dist, 0, r, r);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
}