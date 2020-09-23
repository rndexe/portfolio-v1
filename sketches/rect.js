const rect = (p) => {
  p.setup = setup;
  p.draw = draw;
  p.windowResized = windowResized;
  let fullscreen = true;
  function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    origWidth = p.windowWidth;
    origHeight = p.windowHeight;
  }

  function draw() {
    p.background(255);
    p.rectMode(p.CENTER);
    p.fill(255,105,180);
    p.rect(p.width/2,p.height/2,p.width/2,p.height/2);	  

  }
  function windowResized() {
  	p.resizeCanvas(p.windowWidth, p.windowHeight);
  }	  
};
