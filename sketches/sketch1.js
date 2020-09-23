const sketch1 = (p) => {
  p.setup = setup;
  p.draw = draw;	
  function setup() {
    p.createCanvas(720, 400);
  }

  function draw() {
    p.background(127);
    p.noStroke();
    for (let i = 0; i < p.height; i += 20) {
      p.fill(129, 206, 15);
      p.rect(0, i, p.width, 10);
      p.fill(255);
      p.rect(i, 0, 10, p.height);
    }
  }	  
};
