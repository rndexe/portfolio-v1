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
		console.log(cam.eyeX + "," + cam.eyeY);
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
