function toCelsius (degree) {
	var celsius = ((degree - 32) * 5) / 9;
	return celsius;
}

function toFahrenheit (degree) {
	var fahrenheit = ((degree * 9) / 5) + 32;
	return fahrenheit;
}
var toFRadio = document.getElementById("toFar");
var toCRadio = document.getElementById("toCel");

// Get a reference to the button element in the DOM
var button = document.getElementById("calculate");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}
if (toFRadio.checked === true){
	console.log("To Fahrenheit!")
}

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);

var calcButton = document.getElementById("calculate")
calcButton.addEventListener("click", function(){
    var x = document.getElementById("original").value;
    var answer = document.getElementById("answer");
    if (determineConverter() === true) {
    answer.innerHTML = toCelsius(x);
	}	
});









