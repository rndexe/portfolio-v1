const rect = (p) => {
  p.setup = setup;
  p.draw = draw;
  p.windowResized = windowResized;
  p.fullscreenstate = true;
  function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    origWidth = p.windowWidth;
    origHeight = p.windowHeight;
  }

  function draw() {
    p.background(253,246,227);
    p.rectMode(p.CENTER);
    p.fill(255,105,180);
    p.rect(p.width/2,p.height/2,p.width/2,p.height/2);	  

  }
  function windowResized() {
  	p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};
