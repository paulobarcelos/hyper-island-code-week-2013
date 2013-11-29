if(!name){
	var random_id = "0000" + Math.floor(Math.random() * 10000);
	name = name || 'Code Week app ' + random_id.substring(random_id.length-4);
}

if(!server){
	server = "hyperspacebrew.com";
}

var sb = new Spacebrew.Client({server: server, reconnect: true, name: name});


if(typeof onButtonPressed!= "undefined" || typeof onButtonReleased!= "undefined") sb.addSubscribe("Button", "boolean");
if(typeof onSlider1 != "undefined" ) sb.addSubscribe("Slider 1", "range");
if(typeof onSlider2 != "undefined" ) sb.addSubscribe("Slider 2", "range");
if(typeof onSlider3 != "undefined" ) sb.addSubscribe("Slider 3", "range");
if(typeof onSlider4 != "undefined" ) sb.addSubscribe("Slider 4", "range");
if(typeof onSlider5 != "undefined" ) sb.addSubscribe("Slider 5", "range");
if(typeof onSlider6 != "undefined" ) sb.addSubscribe("Slider 6", "range");
if(typeof onSlider7 != "undefined" ) sb.addSubscribe("Slider 7", "range");
if(typeof onSlider8 != "undefined" ) sb.addSubscribe("Slider 8", "range");

sb.onRangeMessage = onRangeMessage;
sb.onBooleanMessage = onBooleanMessage;

sb.connect();

function onBooleanMessage (name, value) {
	switch(name){
		case 'Button':
			if(value){
				if(typeof onButtonPressed!= "undefined") onButtonPressed();
			}
			else if(typeof onButtonReleased!= "undefined") onButtonReleased();
			break;
	}
}
function onRangeMessage(name, value){
	if(value > 1) value /= 1024;
	switch(name){
		case 'Slider 1':
			if(typeof onSlider1!= "undefined" ) onSlider1(value);
			break;
		case 'Slider 2':
			if(typeof onSlider2!= "undefined" ) onSlider2(value);
			break;
		case 'Slider 3':
			if(typeof onSlider3!= "undefined" ) onSlider3(value);
			break;
		case 'Slider 4':
			if(typeof onSlider4!= "undefined" ) onSlider4(value);
			break;
		case 'Slider 5':
			if(typeof onSlider5!= "undefined" ) onSlider5(value);
			break;
		case 'Slider 6':
			if(typeof onSlider6!= "undefined" ) onSlider6(value);
			break;
		case 'Slider 7':
			if(typeof onSlider7!= "undefined" ) onSlider7(value);
			break;
		case 'Slider 8':
			if(typeof onSlider8!= "undefined" ) onSlider8(value);
			break;

	}
}