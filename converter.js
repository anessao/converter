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
    console.log(degree);
    answer.innerHTML = toCelsius(degree);
	} else if (toFarRadio.checked){
	var degree = document.getElementById("original").value;
    console.log(degree);
    answer.innerHTML = toFahrenheit(degree);
	}
});
//Button Actions - Clear all inputs:
clearButton.addEventListener("click", function(){
	var degree = document.getElementById("original").value = "";
	toCelRadio.checked = false;
	toFarRadio.checked = false;
	answer.innerHTML = "";
})







