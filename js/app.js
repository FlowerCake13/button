var Uscore = 0;

var highscore = 0;
document.getElementById('hiscore').innerHTML = "New Highscore: " + highscore;
var timerStart = false;

var press = function() {
	if (timerStart == false) {
		coolerfunction();
		timerStart = true;
	};
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;

	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};

function coolerfunction() {
    setTimeout(function(){ 
		var cps = Uscore/10;
		alert("Your CPS is "+cps);
		Uscore = highscore;
		// Uscore = 0;
		document.getElementById('score').innerHTML = "Your Score: " + Uscore;
		timerStart = false;

	}, 10000);
}