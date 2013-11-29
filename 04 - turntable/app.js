// Connect to Spacebrew
name = 'Turntable'; 



// Load song and start playing
var song = new WX.Sampler({ source: "bombay.mp3", basePitch: 60 });
song.to(WX.DAC);
setTimeout(function(){
	song.noteOn(60);
	song._player.loop = true
}, 3000); 


onSlider1 = function (value) {

	// Set the speed from 0 to 2
	song._player.playbackRate.setValueAtTime(value * 2, 0);

}
