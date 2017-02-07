// TEMPERATURE CONVERTER
// <!-- Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion. -->

function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);