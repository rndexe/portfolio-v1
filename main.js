let currentSketch;
const menuButton = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
bgSketch = new p5(stars,"bgsketch");


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

setTimeout( function() {
	document.getElementById("bgsketch").classList.add("show");
},250);
