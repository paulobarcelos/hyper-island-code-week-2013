// Connect to Spacebrew
name = "Hello";

// "Get" the image element, so we can control it with code
image = document.getElementById('image');


// This will happen everytime the button is pressed
onButtonPressed = function () {
	// .style contains all the style possibilities for the element
	image.style.visibility = 'visible';
	
}

// This will happen everytime the button is released
onButtonReleased = function () {
	image.style.visibility = 'hidden';
}