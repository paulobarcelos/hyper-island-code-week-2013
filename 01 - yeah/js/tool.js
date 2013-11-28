var sb = new Spacebrew.Client();

sb.addSubscribe("Button", "boolean");

sb.onRangeMessage = onRangeMessage;
sb.onBooleanMessage = onBooleanMessage;


var connect = function (name, host) {
	var random_id = "0000" + Math.floor(Math.random() * 10000)
	name = name || 'Code Week app';
	
	sb.name(name);// + ' ' + random_id.substring(random_id.length-4));
	
	sb.connect(host);
}


var onButtonPressed = function () {
	
}
var onButtonReleased = function () {
	
}

function onBooleanMessage (name, value) {
	console.log(name, value)
	if(name == 'Button'){
		if(value) onButtonPressed();
		else onButtonReleased();
	}
}


function onRangeMessage(name, value){
	console.log("Received new range message ", value);
	$("#"+name).slider('refresh', value);
};