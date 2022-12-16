var cssText = document.querySelector(".current-gradient-info");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	//background: linear-gradient(to right, #780206 , #061161); css format for gradient
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssText.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);// event listener for input
color2.addEventListener("input", setGradient);