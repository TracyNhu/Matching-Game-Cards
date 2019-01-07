/*
 * Create a list that holds all of your cards
 */
var currOpen = [];
var myCards = [
	"fa fa-diamond", 
	"fa fa-paper-plane-o",
	"fa fa-anchor", 
	"fa fa-bolt", 
	"fa fa-cube",
	"fa fa-leaf",
	"fa fa-bicycle",
	"fa fa-bomb", 
];
myCards = myCards.concat(myCards)
var shuffleDeck = document.getElementsByClassName('deck');
var cardsList = document.querySelectorAll('.card');
var counter = 0; //use to loop through myCards array
var matchCounter = 0;
var numberOfTurns = 0;
var changeMovesNum = document.getElementById('moves');
var button = document.getElementById('playAgain');
var time = '00:00';
var minLabel = document.getElementById("minutes");
var secLabel = document.getElementById("seconds");
var totalSec = 0;
setInterval(setTime, 1000);
var numOfStars = 0;

shuffle(myCards);

// apply the classes from myCards array to the Is 
for (let k = 0; k < cardsList.length; k++) {
	cardsList[k].firstElementChild.className = myCards[k];

	counter++;

	//to reset counter to 0 after it runs 8x thru myCards
	if (counter === 7) {
		counter = 0;
	}
}

var lis = document.getElementsByClassName('card');

// place a click event on each card
for (let j = 0; j < lis.length; j++) {
	lis[j].addEventListener('click', function(event){


		/// TODO************** delete this line after testing display msg**
		//document.getElementsByClassName('modal')[0].classList.add('show');
		//gameWon();
		

		// 2 cards are not yet open
		if (currOpen.length < 2) {
			event.target.classList.add('show','open');
		}

		// put card clicked on inside array for comparison
		currOpen.push(event.target);
		
		// 2 cards are open so we check if match or not
		if (currOpen.length === 2) {

			numberOfTurns++;
			document.getElementById('moves').innerText = numberOfTurns;
			event.target.classList.add('open');

			// deduct a star after a specific # of turns
			var starClass = document.getElementsByClassName('stars');
			if (numberOfTurns === 8 || numberOfTurns === 12 || numberOfTurns === 16) {
				starClass[0].removeChild(starClass[0].children[0]);
			}

			// if true, then the cards are a match
			if (currOpen[0].firstElementChild.className === 
				currOpen[1].firstElementChild.className) {
				currOpen[0].classList.add('match');
				event.target.classList.add('match');
				currOpen[0].classList.remove('open');
				event.target.classList.remove('open');
				currOpen = [];
				console.log('card match');
				
				matchCounter++;

				// game is won, all cards match
				if (matchCounter === 8) {
					gameWon();
				}
			} 
			else {
				currOpen[0].classList.add('notmatch');
				currOpen[1].classList.add('notmatch');

				// no match so we close them and clear currOpen array
				// close cards after .5 seconds
				setTimeout(function() {
					currOpen[0].classList.remove('notmatch','show','open');
					currOpen[1].classList.remove('notmatch','show','open');
		
					// clear array to make room for 2 new cards to
					// go in after clicking on them
					currOpen.length = 0;
				}, 1000);
				
			}
		}   
	});
}

// timer code from StackOverflow
// https://stackoverflow.com/questions/42874790/how-do-i-make-a-html-count-up-timer-with-the-daysminutesseconds-without-resett
function setTime() {
	window.localStorage.setItem('totalSec', ++totalSec);
	secLabel.innerHTML = pad(totalSec % 60);
	minLabel.innerHTML= pad(parseInt(totalSec / 60));
}

function pad(val) {
	var valString = val + "";
	if (valString.length < 2) {
		return "0" + valString;
	} else {
		return valString;
	}
}

function gameWon() {
	// call popup modal window function
	document.getElementsByClassName('modal')[0].classList.add('show');
	var moves = document.getElementById('totalMoves');
	moves.innerText = document.getElementById('moves').innerText;
	
	var min = document.getElementById('howLongMinutes');
	var sec = document.getElementById('howLongSeconds');
	min.innerText = document.getElementById('minutes').innerText;
	sec.innerText = document.getElementById('seconds').innerText;
	
	finalStars();
}

// to show final stars
function finalStars() {
	var finalStars = document.getElementById('finalStars');
	var starElement = '<li class="fa fa-star"></li>';

	if (numberOfTurns <= 8) {
		for (var i = 0; i < 3; i++) {
			finalStars.innerHTML += starElement;
		}
	}
	if (numberOfTurns > 8 && numberOfTurns <= 12) {
		for (var i = 0; i < 2; i++) {
			finalStars.innerHTML += starElement;
		}
	}
	if (numberOfTurns > 12) {
		finalStars.innerHTML = starElement;
	}
}

//When click on the button "play again", close it
document.getElementById('playAgain').addEventListener('click', function() {
	restart();
	document.getElementsByClassName('modal')[0].classList.remove('show');
}); 

// restart button
document.getElementsByClassName('restart')[0].addEventListener('click', function() {
	restart();
});

function restart() {
	for (let i = 0; i < cardsList.length; i++){
		cardsList[i].classList.remove('open','show','match','notmatch');
	// remove open and show from all cards
	}
	shuffle(myCards);

	for(let k = 0; k < cardsList.length; k++) {
		cardsList[k].firstElementChild.className = myCards[k];
	}
	counter = 0;
	matchCounter = 0;
	numberOfTurns= 0;
	time = '00:00';
	totalSec = 0;
	numOfStars = 0;
	document.getElementById('moves').innerText = 0;
	document.getElementById('finalStars').innerHTML = '';

	var star = '<li id="one"><i class="fa fa-star"></i></li>';
	document.getElementsByClassName('stars')[0].innerHTML = '';
	for (let x = 0; x < 3; x++) {
		document.getElementsByClassName('stars')[0].innerHTML += star;
	}
	
}

// reset star
function resetStars() {
	document.getElementById('one').innerHTML = '<i class="fa fa-star"></i>';
	document.getElementById('two').innerHTML = '<i class="fa fa-star"></i>';
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(myCards) {
	var currentIndex = myCards.length, temporaryValue, randomIndex;

	for (var i = myCards.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = myCards[i];
		myCards[i] = myCards[j];
		myCards[j] = temp;
	}
	return myCards;
}

// for testing purpose to show all the cards instead of playing it
function openAll(){
	var cards = document.getElementsByClassName('card');
	for(var i=0; i < cards.length; i++){
		cards[i].classList.add('show','open');
	}
} 
