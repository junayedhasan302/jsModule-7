// Problem-10: Sum and avarage of an array

const prompt = require("prompt-sync")();
let arr = prompt("Enter numbers: ").split(" ").map(Number);

function sum(arr) {
    let totalSum = 0;
    for (let num of arr) {
        totalSum += num;
    }
    return totalSum;
}
function average(arr) {
    return sum(arr) / arr.length;
}

console.log("Sum =", sum(arr));
console.log("Average =", average(arr));