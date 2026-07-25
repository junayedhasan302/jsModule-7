// Problem-1: Check even or Odd
const prompt = require("prompt-sync")();

function evenOrOdd(number){
    if(number%2){
        return "Odd Number";
    } else return "Even Number";
}
let number = prompt("Enter a Number: ");
console.log(evenOrOdd(number));