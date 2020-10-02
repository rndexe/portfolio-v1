const bouncyballs = (p) => {
	let numBalls = 13;
	let spring = 0.05;
	let gravity = 0.03;
	let friction = -0.9;
	let balls = [];

	p.setup = setup;
	p.draw = draw;
	
	function setup() {
	  p.createCanvas(600, 600);
	  for (let i = 0; i < numBalls; i++) {
	    balls[i] = new Ball(
	      p.random(p.width),
	      p.random(p.height),
	      p.random(30, 70),
	      i,
	      balls
	    );
	  }
	  p.noStroke();
	  p.fill(255, 204);
	}

	function draw() {
	  p.background(0);
	  balls.forEach(ball => {
	    ball.collide();
	    ball.move();
	    ball.display();
	  });
	}

	class Ball {
	  constructor(xin, yin, din, idin, oin) {
	    this.x = xin;
	    this.y = yin;
	    this.vx = 0;
	    this.vy = 0;
	    this.diameter = din;
	    this.id = idin;
	    this.others = oin;
	  }

	  collide() {
	    for (let i = this.id + 1; i < numBalls; i++) {
	      // console.log(others[i]);
	      let dx = this.others[i].x - this.x;
	      let dy = this.others[i].y - this.y;
	      let distance = p.sqrt(dx * dx + dy * dy);
	      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
	      //   console.log(distance);
	      //console.log(minDist);
	      if (distance < minDist) {
		//console.log("2");
		let angle = p.atan2(dy, dx);
		let targetX = this.x + p.cos(angle) * minDist;
		let targetY = this.y + p.sin(angle) * minDist;
		let ax = (targetX - this.others[i].x) * spring;
		let ay = (targetY - this.others[i].y) * spring;
		this.vx -= ax;
		this.vy -= ay;
		this.others[i].vx += ax;
		this.others[i].vy += ay;
	      }
	    }
	  }

	  move() {
	    this.vy += gravity;
	    this.x += this.vx;
	    this.y += this.vy;
	    if (this.x + this.diameter / 2 > p.width) {
	      this.x = p.width - this.diameter / 2;
	      this.vx *= friction;
	    } else if (this.x - this.diameter / 2 < 0) {
	      this.x = this.diameter / 2;
	      this.vx *= friction;
	    }
	    if (this.y + this.diameter / 2 > p.height) {
	      this.y = p.height - this.diameter / 2;
	      this.vy *= friction;
	    } else if (this.y - this.diameter / 2 < 0) {
	      this.y = this.diameter / 2;
	      this.vy *= friction;
	    }
	  }

	  display() {
	    p.ellipse(this.x, this.y, this.diameter, this.diameter);
	  }
	}
};

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

const stars = (p) => {
	p.setup = setup;
	p.draw = draw;	
	p.windowResized = windowResized;
	p.fullscreenstate = true;
	let dots;
	let spacing = 50;
	let cam;
	let i,j,m,n,t=0,tx=0,ty=50;
	function setup() {
		cnv = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
		cnv.mouseMoved(shiftCanvas);
		dots = [];
		cam = p.createCamera();
		cam.camera(0,50,350, 0,0,0, 0,-1,0);
		for (i = -30, m = 0; i < 30; ++i, m++) {
			dots[m] = [];		  
			for (j = -30, n = 0; j < 30; ++j, n++) {
				dots[m][n] = p.random(0,5)-150;
			}
		}

	}

	function draw() {
		p.background(12);
		p.stroke('#586e75');
		p.noFill();
		p.beginShape(p.POINTS);
		for (i = -30, m = 0; i < 30; ++i, ++m) {
			for (j = -30, n = 0; j < 30; ++j, ++n) {
				let x = i*spacing + spacing/2;
				let z = j*spacing + spacing/2;
				let waveOffset = 2 * Math.sin(z * 0.02 + x * 0.015 + t * 0.02);
				let y = dots[m][n] + waveOffset;	    
				p.vertex( x, y, z);
			}
		}
		p.endShape();
		const rate = 0.01;
		let newX = cam.eyeX + (tx - cam.eyeX)*rate;
		let newY = cam.eyeY + (ty - cam.eyeY)*rate;
		cam.camera( newX,newY,350, 0,0,0, 0,-1,0);
		t+=2;	

	}

	function shiftCanvas() {
		tx = (p.mouseX/p.width - 0.5) * 50 -25;// -75 to -25
		ty = 50 + (p.mouseY/p.height) * 50; // 50 to 100
	}
	function windowResized() {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	}	  
};	
