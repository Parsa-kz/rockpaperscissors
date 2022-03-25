// defining choices in variables
const choices = document.querySelectorAll("button");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("com-choice");
const resultDisplay = document.getElementById("final-result");
let userChoice;
let computerChoice;
let result;

// user choice
choices.forEach(choices => choices.addEventListener("click", event => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    handlingComChoice();
    getResult();
}))

// computer choice
function handlingComChoice(){
    const randomNumber = Math.floor(Math.random() * choices.length) + 1;

    if(randomNumber === 1){
        computerChoice = "سنگ";
    } else if(randomNumber === 2){
        computerChoice = "کاغذ";
    } else if(randomNumber === 3){
        computerChoice = "قیچی";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

// getting results
function getResult(){
    if (computerChoice === userChoice){
        result = "مساوی";
    }
    if(computerChoice === "سنگ" && userChoice === "کاغذ"){
        result = "بردی";
    }
    if(computerChoice === "سنگ" && userChoice === "قیچی"){
        result = "باختی";
    }
    if(computerChoice === "کاغذ" && userChoice === "قیچی"){
        result = "بردی";
    }
    if(computerChoice === "کاغذ" && userChoice === "سنگ"){
        result = "باختی";
    }
    if(computerChoice === "قیچی" && userChoice === "سنگ"){
        result = "بردی";
    }
    if(computerChoice === "قیچی" && userChoice === "کاغذ"){
        result = "باختی";
    }

    resultDisplay.innerHTML = result;
}