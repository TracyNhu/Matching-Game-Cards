/*
 * Create a list that holds all of your cards
 */
var myCards = ["fa fa-diamond", "fa fa-paper-plane-o","fa fa-anchor", "fa fa-bolt", "fa fa-cube","fa fa-leaf","fa fa-bicycle","fa fa-bomb"];
var cardsList = document.querySelectorAll('.card');
var counter = 0; //use to loop through myCards array
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

shuffle(myCards);

//testing to see if they shuffle 
for (let i = 0; i < myCards.length; i++) {
	console.log(myCards[i]);
}

//to access 16 <i> from html
for(let k = 0; k < cardsList.length; k++) {
	cardsList[k].firstElementChild.className = myCards[counter];

	counter++;

//to reset counter to 0 after it runs 7x thru myCards
	if (counter === 7) {
		counter = 0;
	}

}  	


// get all LIs into an array
// loop through array and put click on each one
// when each LI is clicked, put the .show class on it

var lis = document.getElementsByClassName('card');

// place a click event on each card
for (let j = 0; j < lis.length; j++) {
	lis[j].addEventListener('click', function(event){
		event.target.classList.add('show');
		event.target.classList.add('open');

	}); 
}

// from mentor
/*var matchCount = 0;

if (myCards.lengh ===2) {
	addMoves();
	if(myCards[0].innerHTML === myCards[1].innerHTML) {
		matchCount++;
		console.log(matchCount); }
	} 
	else {
		notmatched();

	} */

	
// now to open only 2 cards at a time
//when cards match, add .match class,show and stay open and remove evemtListener cuz u dontwant to have it clcikable anymore
/*var matchedCards = [];

function matched() {

	matchedCards[0].classList.add('match');
	event.target.classList.add('match');
	matchedCards[0].classList.remove('show','open');
	event.tarhet.classList.remove('show','open');
	matchedCards = [];

}		
	
var notMatched = [];

function notMatched() {
	[0].classList.remove('show','open')
	[1].classList.remove('show','open')
	
} */

//when click and cards dont match, close

const shuffleDeck = document.getElementsByClassName('deck');



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(myCards) {
	var currentIndex = myCards.length, temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = myCards[currentIndex];
		myCards[currentIndex] = myCards[randomIndex];
		myCards[randomIndex] = temporaryValue;
	}

	return myCards;
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */




