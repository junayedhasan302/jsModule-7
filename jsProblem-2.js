// Problem-2: Factorial
function factorial(number){
    if(number==0) return 1;
    else return number*factorial(number-1);
}

const prompt = require("prompt-sync")();
let number = prompt("Enter a Number: ");
console.log(factorial(number));