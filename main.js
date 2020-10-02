let currentSketch;
const menuButton = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
bgSketch = new p5(stars,"bgsketch");
window.onresize = fitcanvas;

chooseSketchFromUrl();

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
	stringToSketch(sketchId);
}

function chooseSketchFromUrl() {
	const currentUrl = new URL(window.location.href);
	//console.log(currentUrl.hash);
	if(currentUrl.hash !== "") {
		let hashValue = currentUrl.hash.slice(1);
		stringToSketch(hashValue);
	}	
}	

function stringToSketch(string) {
	switch (string) {
		case 'sketch1':
			loadSketch(sketch1);
			break;
		case 'sketch2':
			loadSketch(sketch2);
			break;
		case 'bouncyballs':
			loadSketch(bouncyballs);
			break;
		case 'randomtext':
			loadSketch(randomtext);
			break;
		case 'rect':
			loadSketch(rect);
			break;
		case 'stars':
			loadSketch(stars);
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

setTimeout( function() {
	document.getElementById("bgsketch").classList.add("show");
},250);
