//Variables declaring references
var answer = document.getElementById("answer");
var toFarRadio = document.getElementById("toFar");
var toCelRadio = document.getElementById("toCel");
var button = document.getElementById("calculate");
var clearButton = document.getElementById("clear");

//Calculation functions
function toCelsius (degree) {
	var celsius = ((degree - 32) * 5) / 9;
	return celsius;
}

function toFahrenheit (degree) {
	var fahrenheit = ((degree * 9) / 5) + 32;
	return fahrenheit;
}

//Button Actions - Calculate:
button.addEventListener("click", function(){
    if (toCelRadio.checked) {
	var degree = document.getElementById("original").value;
    	//Change font colors
    	if (toCelsius(degree) > 32){
    		answer.innerHTML = "<h2 class='red'>" + toCelsius(degree).toFixed(2) + "C" + "</h2>";
    	} else if (toCelsius(degree) < 0){
    		answer.innerHTML = "<h2 class='blue'>" + toCelsius(degree).toFixed(2) + "C" + "</h2>";
    	} else {
    		answer.innerHTML = "<h2 class='green'>" + toCelsius(degree).toFixed(2) + "C" + "</h2>";
    		}
	} else if (toFarRadio.checked){
	var degree = document.getElementById("original").value;
    	//Change font colors
    	if (toFahrenheit(degree) > 90){
    		answer.innerHTML = "<h2 class='red'>" + toFahrenheit(degree).toFixed(2) + "F" + "</h2>";
    	} else if (toFahrenheit(degree) < 32) {
    		answer.innerHTML = "<h2 class='blue'>" + toFahrenheit(degree).toFixed(2) + "F" + "</h2>";
    	} else {
    		answer.innerHTML = "<h2 class='green'>" + toFahrenheit(degree).toFixed(2) + "F" + "</h2>";
    	}
	}
});

//Button Actions - Clear all inputs:
clearButton.addEventListener("click", function(){
	var degree = document.getElementById("original").value = "";
	toCelRadio.checked = false;
	toFarRadio.checked = false;
	answer.innerHTML = "";
})








