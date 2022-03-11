// create a table with the dices images
let images = [
  "", 
  "images/01des.png",
  "images/02des.png",
  "images/03des.png",
  "images/04des.png",
  "images/05des.png",
  "images/06des.png"
];
// create a variable for the location of the dice in html
let dice = document.querySelector("#dice");

// create variables for the location of the buttons in html
let buttonRollDice = document.querySelector(".rollDice");
let buttonNewGame = document.querySelector(".newGame");
let buttonHold = document.querySelector(".hold");

// create variables for the score
let currentScoreOne = 0;
let currentScoreTwo = 0;
let globalScoreOne = 0;
let globalScoreTwo = 0;

// create variables for the location of the scores(current&global) in html
let currentScoreOneHTML = document.querySelector("#currentScoreOne");
let currentScoreTwoHTML = document.querySelector("#currentScoreTwo");
let globalScoreOneHTML = document.querySelector("#globalScoreOne");
let globalScoreTwoHTML = document.querySelector("#globalScoreTwo");

// create variables for the location of the text(title&winner) in html
let playerOneTitle = document.querySelector(".playerOneTitle");
let textOne = document.querySelector("#textOne");
let playerTwoTitle = document.querySelector(".playerTwoTitle");
let textTwo = document.querySelector("#textTwo");

// playerOne is the starter
let currentPlayer = "one";


// roll dice button
buttonRollDice.addEventListener("click", function () {
  function roll() {
    // shake animation on the dice
    document.getElementById("dice").animate([
      { transform: 'rotate(8deg)' },
      { transform: 'rotate(-8deg)' },
      { transform: 'rotate(8deg)' }
    ], {
      duration: 500,
      iterations: 1
    })
    // get random number between 1 and 6
    let nbRandom = Math.floor((Math.random()*6) + 1);
    // put image in html associate with the nbRandom
    dice.setAttribute("src", images[nbRandom]);
    return nbRandom;
  }
  // get the result of the function roll()
  let rollResult = roll();    

  // change of player if the dice is one
  if (currentPlayer == "one") {
    // if dice 2 to 6, color change for playerOne
    if (rollResult !==1 && globalScoreOne < 50) {
      currentPlayer = "one";
      playerOneTitle.style.color = "red"; 
      playerOneTitle.style.fontWeight = "bold";
      // the rollResult is added and displayed in html for playerOne
      currentScoreOne = currentScoreOne + rollResult;
      currentScoreOneHTML.innerHTML = currentScoreOne;
    } else { 
      // if dice 1, color change for playerTwo
      currentPlayer = "two";
      playerTwoTitle.style.color = "red"; 
      playerTwoTitle.style.fontWeight = "bold";
      // currentScore and color reset for playerOne
      currentScoreOne = 0;
      currentScoreOneHTML.innerHTML = 0;
      playerOneTitle.style.color = "black"; 
      playerOneTitle.style.fontWeight = "normal";
    }
  } else if (currentPlayer == "two") {
    // if dice 2 to 6, color change for playerTwo
    if (rollResult !==1 && globalScoreTwo < 50) {
      currentPlayer = "two";
      // the rollResult is added and displayed in html for playerTwo
      currentScoreTwo = currentScoreTwo + rollResult;
      currentScoreTwoHTML.innerHTML = currentScoreTwo;
    } else {
      // if dice 1, color change for playerOne
      currentPlayer = "one";
      playerOneTitle.style.color = "red"; 
      playerOneTitle.style.fontWeight = "bold";
      // currentScore and color reset for playerTwo
      currentScoreTwo = 0;
      currentScoreTwoHTML.innerHTML = 0;
      playerTwoTitle.style.color = "black"; 
      playerTwoTitle.style.fontWeight = "normal";
    }
  }
});


// hold button
buttonHold.addEventListener("click", function () {
  if (currentPlayer == "one") {
    // the currentScore goes to the globalScore and displayed in html
    globalScoreOne = globalScoreOne + currentScoreOne
    globalScoreOneHTML.innerHTML = globalScoreOne;
    // the currentScore reset and displayed in html
    currentScoreOne = 0;
    currentScoreOneHTML.innerHTML = 0;
    // the winner/loser text in html
    if (globalScoreOne >= 50) {
      textOne.innerHTML = "winner!!";
      textOne.style.fontSize = "50px";
      textTwo.innerHTML = "loser";
    } else {
      // color change
      currentPlayer = "two";
      playerTwoTitle.style.color = "red"; 
      playerTwoTitle.style.fontWeight = "bold";
      playerOneTitle.style.color = "black"; 
      playerOneTitle.style.fontWeight = "normal";
    }
  } else if (currentPlayer == "two") {
    // the currentScore goes to the globalScore and displayed in html
    globalScoreTwo = globalScoreTwo + currentScoreTwo
    globalScoreTwoHTML.innerHTML = globalScoreTwo;
    // the currentScore reset and displayed in html
    currentScoreTwo = 0;
    currentScoreTwoHTML.innerHTML = 0;
    // the winner/loser text in html
    if (globalScoreTwo >= 50) {
      textTwo.innerHTML = "winner!!";
      textTwo.style.fontSize = "50px";
      textOne.innerHTML = "loser";
    } else {
      // color change
      currentPlayer = "one";
      playerOneTitle.style.color = "red"; 
      playerOneTitle.style.fontWeight = "bold";
      playerTwoTitle.style.color = "black"; 
      playerTwoTitle.style.fontWeight = "normal";
    }
  }
});


// new game button --> reset all value to initial
buttonNewGame.addEventListener("click", function () {
  currentPlayer = "one";
  dice.setAttribute("src", images[1]);
  // playerOne
  playerOneTitle.style.color = "red"; 
  playerOneTitle.style.fontWeight = "bold";
  textOne.innerHTML = "";
  textOne.style.fontSize = "20px";
  currentScoreOne = 0;
  globalScoreOne = 0;
  currentScoreOneHTML.innerHTML = 0;
  globalScoreOneHTML.innerHTML = 0;
  // playerTwo
  playerTwoTitle.style.color = "black"; 
  playerTwoTitle.style.fontWeight = "normal";
  textTwo.innerHTML = "";
  textTwo.style.fontSize = "20px";
  currentScoreTwo = 0;
  globalScoreTwo = 0;
  currentScoreTwoHTML.innerHTML = 0;
  globalScoreTwoHTML.innerHTML = 0;
});
