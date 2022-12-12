let availableCash = 2000;

function checkBalance() {
 console.log(availableCash);
}
function withdrawMoney() {
    let userInput = Number(prompt("Enter the amount of money for withdraw"));
    let result = availableCash - userInput;
    if (result < 0) {
        console.log(`Not enough money`);
    } else {
        console.log(`You've withdrawed ${userInput}, now you have ${result}`);
    }
}
let userChoice = prompt("To check you balance, please enter 1. To withdraw money, please enter 2");
if (userChoice === "1") {
    checkBalance()
} else if (userChoice === "2") {
    withdrawMoney()
} else {
    console.log(`Please enter valid input`);
}
