// Connect to Spacebrew
name = "Yeah!";

// "Get" the audio element, so we can control it with code
audio = document.getElementById('audio');


// This will happen everytime the button is pressed
onButtonPressed = function () {
	// Set the audio back to the beginning...
	audio.currentTime = 0;
	// and play it!
	audio.play();	
}