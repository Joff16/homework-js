function sumOfArray(arr){
    sum = 0;
    for(let item of arr){
        sum += item;
    }
    return sum;
}

const area = document.getElementById("PrintNumbers");
const numbers = [2,4,5,11,23,98];

area.innerText = `The sum of ${numbers.join(" + ")}`;
area.innerText += ` = ${sumOfArray(numbers)}`;