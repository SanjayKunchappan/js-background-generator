var cssText = document.querySelector(".current-gradient-info");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGradientButton = document.querySelector("#randomGenerate");


function randNumGen () {
	var	randomNumber = Math.floor(Math.random() * 255); //returns a random integer between 0 to 255
	return randomNumber;
}

function randomRgbGenerate(a,b,c) {
	var randRGB = "rgb("+a+ ","+b+","+c+")";
	return randRGB;		
}

function setGradient() {
	//background: linear-gradient(to right, #780206 , #061161); css format for gradient
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssText.textContent = body.style.background + ";";
}

function setRandomGradient() {
	color1.value = randomRgbGenerate(randNumGen(),randNumGen(),randNumGen());
	color2.value = randomRgbGenerate(randNumGen(),randNumGen(),randNumGen());
	console.log()
	setGradient();
}

setGradient();
color1.addEventListener("input", setGradient);// event listener for input
color2.addEventListener("input", setGradient);
randomGradientButton.addEventListener("click", setRandomGradient);