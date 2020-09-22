const sketch2 = (p) => {
  let y = 100;
  p.setup = setup;
  p.draw = draw;
  function setup() {
    p.createCanvas(720, 400);
    p.stroke(255); 
    p.frameRate(30);
  }
  function draw() {
    p.background(0); 
    y = y - 1;
    if (y < 0) {
      y = p.height;
    }
    p.line(0, y, p.width, y);
  }
};	
