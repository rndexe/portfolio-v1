let currentSketch;
const menuButton = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");

window.onresize = fitcanvas;
setTimeout( function() {
	document.getElementById("title").classList.add("show");
},1000);
menuButton.addEventListener('click', function() {
	
	let dropdownState = dropdown.className;
	if (dropdownState === "closed") {
        	menuButton.innerText = "< Menu";
        	dropdown.className = dropdown.className.replace("closed", "open");
    	} else {
        	menuButton.innerText = "> Menu";
		dropdown.className = dropdown.className.replace("open", "closed");
    	}
});

function chooseSketch (button) {
	let sketchId = button.id;
	switch (sketchId) {
		case 'sketch1':
			loadSketch(sketch1);
			break;
		case 'sketch2':
			loadSketch(sketch2);
			break;
		case 'sketch3':
			loadSketch(bouncyballs);
			break;
		case 'sketch4':
			loadSketch(randomtext);
			break;
		case 'sketch5':
			loadSketch(rect);
			break;
		default:
			return false;
	}
}

function loadSketch (newSketch) {
	if(currentSketch !== undefined) {
		currentSketch.remove();
	}	
	currentSketch = new p5(newSketch,"sketch");
	fitcanvas();
}	

function fitcanvas() {
	
	let bgDiv = document.getElementById("bg");
	let bgWidth = bgDiv.clientWidth;
	let bgHeight = bgDiv.clientHeight;
	
	let sketchDiv = document.getElementById("sketch");
	let sketchWidth = sketchDiv.clientWidth;
	let sketchHeight = sketchDiv.clientHeight;
	
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

	if ( currentSketch.fullscreenstate == true) {
		currentSketch.resizeCanvas(bgWidth,bgHeight);
	} else { 
		currentSketch.resizeCanvas(newWidth,newHeight);	
	}	
	
}
