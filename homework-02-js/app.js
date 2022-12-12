let year = prompt("Enter a year");
calculatedYear = (year - 4) % 12;
if (year < 11) {
    console.log("Pig")
} else if (calculatedYear < 10) {
    console.log("Dog")
} else if (calculatedYear < 9) {
    console.log("Rooster")
} else if (calculatedYear < 8) {
    console.log("Monkey")
} else if (calculatedYear < 7) {
    console.log("Goat")
} else if (calculatedYear < 6) {
    console.log("Horse")
} else if (calculatedYear < 5) {
    console.log("Snake")
} else if (calculatedYear < 4) {
    console.log("Dragon")
} else if (calculatedYear < 3) {
    console.log("Rabbit")
} else if (calculatedYear < 2) {
    console.log("Tigger")
} else if (calculatedYear < 1) {
    console.log("Ox")
} else if (calculatedYear < 0) {
    console.log("Rat")
}