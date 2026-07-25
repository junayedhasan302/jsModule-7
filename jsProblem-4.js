// Problem 2: Sum of a Range of Numbers (1 to N)
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number (n): "));
let sum = 0;
for(let i = 1; i<=n; i++){
    sum+=i;
} console.log("1 to ",n," Summation: ", sum);