// Connect to Spacebrew
name = 'blablabla'; 

// "Get" the elements
andreyTop = document.getElementById('andrey-top');
andreyBottom = document.getElementById('andrey-bottom');

pauloTop = document.getElementById('paulo-top');
pauloBottom = document.getElementById('paulo-bottom');


// This will happen everytime the the slider 1 changes
// Let's use to control Andrey...
onSlider1 = function (value) {
	// "value" goes from 0 to 1
	
	// move the top up -20px, depending of the value of the slider
	andreyTop.style.top = - 20 * value + 'px';

	// move the bottom down 20px, depending of the value of the slider
	andreyBottom.style.top =  20 * value + 'px';
}

// ... and Slider2 will control Paulo...
onSlider2 = function (value) {
	pauloTop.style.top = - 20 * value + 'px';
	pauloBottom.style.top =  20 * value + 'px';
}