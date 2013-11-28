// Connect to Spacebrew
connect('Sound'); 

// "Get" the image element, so we can control it with code
image = document.getElementById('image');

// "Get" the audio element, so we can control it with code
audio = document.getElementById('audio');


// This will happen everytime the button is pressed
onButtonPressed = function () {
	// .style contains all the style possibilities for the element
	image.style.visibility = 'visible';

	// Set the audio back to the beginning...
	audio.currentTime = 0;
	// and play it!
	audio.play();	
}

// This will happen everytime the button is released
onButtonReleased = function () {
	image.style.visibility = 'hidden';
}