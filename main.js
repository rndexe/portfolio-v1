const menuButton = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");

menuButton.addEventListener('click', function() {
	
	let dropdownState = dropdown.className;
	if (dropdownState === "closed") {
        	dropdown.className = dropdown.className.replace("closed", "open");
    	} else {
        	dropdown.className = dropdown.className.replace("open", "closed");
    	}
});


let currentSketch;
function loadSketch (button) {
	let sketchId = button.id;
	switch (sketchId) {
		case 'sketch1':
			if(currentSketch !== undefined) 
				currentSketch.remove(); 
			currentSketch = new p5(sketch1,"sketch");
			fitcanvas();
			break;
		case 'sketch2':
			if(currentSketch !== undefined) 
				currentSketch.remove(); 
			currentSketch = new p5(sketch2,"sketch");
			fitcanvas();
			break;
		case 'sketch3':
			if(currentSketch !== undefined)
				currentSketch.remove();
			currentSketch = new p5(bouncyballs,"sketch");
			fitcanvas();
			break;
		case 'sketch4':
			if(currentSketch !== undefined)
				currentSketch.remove();
			currentSketch = new p5(randomtext,"sketch");
			fitcanvas();
			break;
		case 'sketch5':
			if(currentSketch !== undefined)
				currentSketch.remove();
			currentSketch = new p5(rect,"sketch");
			fitcanvas();
			break;
		default:
			return false;
	}
}

function fitcanvas() {
	let bgDiv = document.getElementById("bg");
	let sketchDiv = document.getElementById("sketch");
	let sketchWidth = sketchDiv.clientWidth;
	let sketchHeight = sketchDiv.clientHeight;
	
	let bgWidth = bgDiv.clientWidth;
	let bgHeight = bgDiv.clientHeight;
	
	let ratio = sketchWidth/sketchHeight;
	let newHeight = sketchHeight;
	let newWidth = sketchWidth;
	if ( sketchWidth > bgWidth ) {
		newWidth = bgWidth;
		newHeight = newWidth/ratio;
	}	
	if ( sketchHeight > bgHeight ) {
		newHeight = bgHeight;
		newWidth = newHeight*ratio;
	}

	if ( currentSketch.fullscreen !== true)
		currentSketch.resizeCanvas(newWidth,newHeight);	
	
}

window.onresize = fitcanvas;
