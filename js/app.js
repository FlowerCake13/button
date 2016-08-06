var Uscore = 0;
var newGame = false;
var highscore = 0;
var prevScore;
document.getElementById('hiscore').innerHTML = "New Highscore: " + highscore;
var timerStart = false;

var press = function() {
	if (timerStart == false) {
		// newGame=true;
		coolerfunction();
		timerStart = true;
	};
	if (newGame == true) {
			Uscore = 0;
			newGame = false;
	}
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;

	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};

function coolerfunction() {
    setTimeout(function(){ 
    	prevScore = Uscore;
		var cps = Uscore/10;
		alert("Your CPS is "+cps);
		// Uscore++;
		if (prevScore > highscore) {
			highscore = Uscore;
		}
		// Uscore = 0;
		document.getElementById('score').innerHTML = "Your Score: " + Uscore;
		newGame = true;
		timerStart = false;
	}, 10000);
}