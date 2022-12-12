
function humanToDogYears() {
    let userInput = Number(prompt("Enter your age:"));
let result =  userInput * 7;
return result;
}
function dogToHumanYears() {
    let userInput = Number(prompt("Enter the dogs age:"));
    let result =  userInput / 7;
    return result;
    }
let userChoice = prompt("Enter 1 for your age and 2 for dogs age");
if (userChoice === "1") {
    console.log(`Result is ${humanToDogYears()}`);
} else if (userChoice === "2") {
    console.log(`Result is ${dogToHumanYears()}`);
} else {
    console.log(`Please enter valid input`);
}
