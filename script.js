//Define # of players, playerN, and init playerNcards
var players = 5; playerN = 3; playerNcards = "";

// A / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10  /  J  /  Q /   K
// 1.   2.   3.  4.  5.   6.   7.  8.  9.   10.   11    12    13

//Define card deck array with 1 being the start of the card deck array. //Disregard 0 of array.
//Define number of cards and the type in each suit.
var cardDeck = ["N/A", "A" , "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//Initit results
var results = 0;
//Define number of results that you want the program to output when finnished with iterations
//Define number of results to show in resultsMax
var resultsMax = 10;

//Test to see if cycling through cardDeck array is displaying properly
/*
for (var i=1; i < cardDeck.length; i++){
     alert(i + " : " + cardDeck[i]);
}
*/


//Define player n position to know where to start displaying their cards for current and future rounds
//Define counter to 1 and increment it by one. Once it gets to players, reset it back to 1.
//Also have a condition if the counter matches playerN, to display or add their card(s) to playerNcards
//in cardDeck.
var counter = 1

for (var times = 0; times < 10; times++ ){
for (var i=1; i < cardDeck.length; i++){
//if (i == playerN && )

    if (counter == playerN) {
//        alert(i + " : " + cardDeck[i] + "\n\n" + "counter : " + counter + "\n" + "playerN : " + playerN);
//Add the playerN cards in cardDeck to playerNcards in increments, then display the outcome when finnished with the loop
//Add the number of results to the var results
        results = results + 1
//        playerNcards = playerNcards + results + " : " + i + " : " + cardDeck[i] + "\n"
//        playerNcards = playerNcards + results + " : " + i + " : " + cardDeck[i] + "</br>"
        playerNcards = playerNcards + results + " : " + cardDeck[i] + "</br>"
    }
//Increment counter by if counters less than players, else reset counter to 1

    if (counter < players){
        counter++;
    } else{
        counter = 1;
    }
}
}

//Set variable htmlOutput to the element id on Main.html in the first <h1> tag so we can output to it 
var htmlOutput = document.getElementById("mainScreen")

//Output playerNcards to the screen of the webpage in the <h1> by using the variable htmlOutput by it's
//builtin function
//store1();

htmlOutput.onclick = function(){
    htmlOutput.innerHTML = playerNcards;
};

//htmlOutput.onclick != function(){
//    htmlOutput.innerHTML = playerNcards;
//};

//var masterHTMLOutput = document.getElementById("masterScreen");
//masterHTMLOutput.onclick = function (){
//    masterHTMLOutput.innerHTML = "<h1>HAHAHAHAHA!</h1>"  
//};

//alert (playerNcards);