//allow user to select rock paper or scissors

//computer selects randomly rock paper or scissors

//display computers choice

//display user choice

//compare user choice to computer choice and determine outcome

//display outcome



var array1 = ["r", "p", "s"];


let userChoice = prompt("Select R, P, or S");
let computerChoice = array1[Math.floor(Math.random()*array1.length)];


console.log (userChoice);
console.log (computerChoice);


if (userChoice === computerChoice){

    alert("Tie");

}

else if (userChoice === "r" && computerChoice === "p"){
    
    alert("Computer Wins")
}

else if ( userChoice === "r" && computerChoice === 2){
   
    alert("User Wins")
}

else if (userChoice === 1 && computerChoice === 2){
    
    alert("Computer Wins")
}

else if (userChoice === 1 && computerChoice === "r") {
    
    alert("User Wins")
}

else if (userChoice === 2 && computerChoice === "r"){
    
    alert("Computer Wins")
}

else if ( userChoice === 2 && computerChoice === 1) {
   
    alert("User Wins")
}


