function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(213, 126, 166);
  fill(57, 58, 61);
  let marginx = windowWidth/5;
  let marginy = windowHeight/10; 		
  rect(marginx,marginy, windowWidth - 2*marginx, windowHeight - 2*marginy);  		
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
