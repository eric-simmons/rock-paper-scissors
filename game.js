var humanScoreEl = document.getElementById('human-score')
var botScoreEl = document.getElementById('bot-score')
var rockImg = document.getElementById('rock')
var paperImg = document.getElementById('paper')
var scissorsImg = document.getElementById('scissors')
var choices = ["r", "p", "s", "a"]
var humanScore = 0
var botScore = 0
var imageElements = [rockImg, paperImg, scissorsImg]

rockImg.addEventListener('click', startRound);
paperImg.addEventListener('click', startRound);
scissorsImg.addEventListener('click', startRound);


function startRound(event) {

    var humanChosenImg = event.target
    var humanChoice = humanChosenImg.dataset.letter


    // randomly choose computerChoice
    var random = Math.floor(Math.random() * choices.length)
    var computerChoice = choices[random]
    document.querySelector('img[data-letter=" + computerChoice +"]')


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
    // hide all three images
   imageElements.forEach(function(img){

    img.style.display = 'none'
   })
   humanChosenImg.style.display = "block"
   computerChosenImg.style.display = "block"

}





