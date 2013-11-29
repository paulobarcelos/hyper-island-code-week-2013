// Connect to Spacebrew
name = 'Boxing'; 


rocky = document.getElementById('rocky');
pow = document.getElementById('pow');
punch = document.getElementById('punch');


onSlider1 = function (value) {
	// We will only consider it a punch when the value is equal to 1;
	// Anything else takes us to the initial state
	if(value > 0.9){
		pow.style.visibility = 'visible';
		rocky.src = "rocky-punch.png";


		// play the sound
		punch.currentTime = 0;
		punch.play();	
	}
	else{
		pow.style.visibility = 'hidden';
		rocky.src = "rocky-normal.png";
	}


}
