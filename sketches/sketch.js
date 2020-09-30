const randomtext = (p) => {
	p.setup = setup;
	p.draw = draw;	
	p.preload = preload;
	p.windowResized = windowResized;
	p.fullscreenstate = true;
	let font, fontsize = 18;
	let brblack, bryellow;
	let w, h;

	function preload() {
	  font = p.loadFont('assets/SourceCodePro.ttf');
	}

	function setup() {

	  p.frameRate(2);
	  let canvas = p.createCanvas(p.windowWidth,p.windowHeight);
	  w = p.windowWidth;
	  h = p.windowHeight;
	  brblack = p.color(0, 43, 54);
	  bryellow = p.color(101, 123, 131);
	  brred = p.color(220, 50, 47);
	  p.fill(bryellow);
	  p.textAlign(p.LEFT, p.TOP);
	  p.textFont(font);
	  p.textSize(fontsize);

	}

	function draw() {
	  p.background(brblack);

	  let letter = p.char(p.random(48, 122));

	  p.fill(bryellow);
	  for (let i = 0; i < w; i += fontsize * 0.6)
	    for (let j = 0; j < h; j += fontsize) {
	      p.text(p.char(p.random(33, 126)), i, j);
	    }
	}
	function windowResized() {
  		p.resizeCanvas(p.windowWidth, p.windowHeight);
		w = p.windowWidth;
		h = p.windowHeight;
	}	  
};
