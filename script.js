var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function displayCSS() {
	css.textContent = body.style.background + ";";
}


function randomHex() {
	return '#'+(Math.random()*0xFFFFFF<<0).toString(16); // Got from Stackoverflow 
}

function setRandomGradient() {
	console.log(body.style.background = "linear-gradient(to right, " + randomHex() + "," + randomHex() + ")");

	displayCSS();
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	displayCSS();
}

body.addEventListener("onload", displayCSS());

button.addEventListener("click", setRandomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);