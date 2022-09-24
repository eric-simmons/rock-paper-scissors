var humanScoreEl = document.getElementById('human-score')
var botScoreEl = document.getElementById('bot-score')
var rockImg = document.getElementById('rock')
var paperImg = document.getElementById('paper')
var scissorsImg = document.getElementById('scissors')
var choices = ["r", "p", "s", "a"]
var humanScore = 0
var botScore = 0


rockImg.addEventListener('click', startRound);
paperImg.addEventListener('click', startRound);
scissorsImg.addEventListener('click', startRound);


function startRound(event) {

  var humanChoice = event.target.dataset.letter


  // randomly choose computerChoice
  var random = Math.floor(Math.random() * choices.length)
  var computerChoice = choices[random]


  var result
  if (humanChoice === computerChoice) {
    result = "Tied!"
  } else if (
    humanChoice === "r" && computerChoice === "s" ||
    humanChoice === "p" && computerChoice === "r" ||
    humanChoice === "s" && computerChoice === "p"
  ) {
    humanScore++
    result = "You Won!"
  } else {
    botScore++
    result = "Bot Won!"
  }

//   // display (alert) comparison results (won, tied, lost round)
//   alert("You " + result)

//   // show stats
//   alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)

};





