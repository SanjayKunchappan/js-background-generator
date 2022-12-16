var cssText = document.querySelector(".current-gradient-info");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGradientButton = document.querySelector("#randomGenerate");


function randHexNumGen () {
	var	randomNumber = Math.floor(Math.random() * 15); //returns a random integer between 0 to 15
	var randomHexadecimalNumber = randomNumber.toString(16); //converts the number to hexadecimal
	return randomHexadecimalNumber; 
}

function randomHexadecimalColor(R1,R2,G1,G2,B1,B2) {
	var randHexColor = "#"+R1+R2+G1+G2+B1+B2;
	return randHexColor;		
}

function setGradient() {
	//background: linear-gradient(to right, #780206 , #061161); css format for gradient
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssText.textContent = body.style.background + ";";
}

function setRandomGradient() {
	color1.value = randomHexadecimalColor(randHexNumGen(),randHexNumGen(),randHexNumGen(),randHexNumGen(),randHexNumGen(),randHexNumGen());
	color2.value = randomHexadecimalColor(randHexNumGen(),randHexNumGen(),randHexNumGen(),randHexNumGen(),randHexNumGen(),randHexNumGen());
	setGradient();
	console.log(color1.value+","+color2.value);
}

setGradient();
color1.addEventListener("input", setGradient);// event listener for input
color2.addEventListener("input", setGradient);
randomGradientButton.addEventListener("click", setRandomGradient);



//Number system conversions in javascript

// var num = 10;

// alert("Binary " + num.toString(2));   // 1010
// alert("Octal " + num.toString(8));    // 12
// alert("Hex " + num.toString(16));     // a

// alert("Binary to Decimal " + parseInt("1010", 2));  // 10
// alert("Octal to Decimal " + parseInt("12", 8));     // 10
// alert("Hex to Decimal " + parseInt("a", 16));       // 10




//generating two colours in RGB format
// but inorder to set the <input type="color"> we need it in hexadecimal and not RGB

// function randNumGen () {
// 	var	randomNumber = Math.floor(Math.random() * 255); //returns a random integer between 0 to 255
// 	return randomNumber;
// }

// function randomRgbGenerate(a,b,c) {
// 	var randRGB = "rgb("+a+ ","+b+","+c+")";
// 	return randRGB;		
// }

// function setRandomGradient() {
// 	color1.value = randomRgbGenerate(randNumGen(),randNumGen(),randNumGen());
// 	color2.value = randomRgbGenerate(randNumGen(),randNumGen(),randNumGen());
// 	console.log()
// 	setGradient();
// }