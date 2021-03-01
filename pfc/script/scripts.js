var Display = function(element) {
    var display = element; 
    function setText(message) { 
        display.innerHTML = message; 
    }
    return {sendMessage : setText};
}  
var scoreComputer = 0;
var scoreUser = 0;   
function comparer(computerChoice, userChoice) {  
    if(userChoice == computerChoice) {
        display.sendMessage("Equality</br></br> Computer chosed " + computerChoice);
    }
    else if((userChoice == "rock" && computerChoice == "scissors") || (userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissors" && computerChoice == "paper")) {
        display.sendMessage("You won</br></br> Computer chosed" + computerChoice);
        scoreUser++;
    }
    else if((userChoice == "paper" && computerChoice == "scissors") || (userChoice == "rock" && computerChoice == "paper") || (userChoice == "scissors" && computerChoice == "rock")) {
        display.sendMessage("You lost</br></br> Computer chosed " + computerChoice);
        scoreComputer++;
    }  
}  
var display = new Display(document.querySelector("#gamestatus"));  
function functionComputerChoice() {
    var computerChoice1 = Math.floor(Math.random() * 51);  
        if (computerChoice1 < 40) {
            computerChoice1 = "rock";
        }
        else if(computerChoice1 > 40 && computerChoice1 < 80) {
            computerChoice1 = "paper";
        }
        else if(computerChoice1 > 80) {
            computerChoice1 = "scissors";
        }
        return computerChoice1;
}  
function functionUserChoice(userChoice) {  
        if(userChoice == "rock") {
            userChoice = "rock";
        }
        else if(userChoice == "paper") {
            userChoice = "paper";
        }
        else if(userChoice == "scissors") {
            userChoice = "scissors";
        }
        return userChoice;
}
function newGame(){
    scoreComputer = 0;
    scoreUser = 0;
    $('#game button').css('display', 'block');
    display.sendMessage("Let's go ! Choose an icon ");
} 
function main() { 
    var tablePlayerChoice = document.querySelectorAll("#game button"); 
    for(var i = 0, taille = tablePlayerChoice.length; i < taille; i++){ 
        var ending = 0; 
        display.sendMessage("Let's go ! Choose an icon");    
        tablePlayerChoice[i].addEventListener("click", function(){  
            userChoice = this.id;  
            var choiceUser = functionUserChoice(userChoice);
            var choiceComputer = functionComputerChoice();
            comparer(choiceComputer, choiceUser);  
            ending++;  
                if(ending >= 10){
                    $('#game button').css('display', 'none');
                    display.sendMessage("Games Over</br></br>Computer : " + scoreComputer + "</br>You : " + scoreUser + "</br></br><button onclick='newGame()'> New Game </button>"); 
                    ending = 0;
                }
        });
    }
}  
main();
   
   
