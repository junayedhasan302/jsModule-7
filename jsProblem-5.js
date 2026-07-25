// Problem 5: Reverse a String
const prompt = require("prompt-sync")();

function revString(name) {
    let reverse = "";
    for (let i = name.length - 1; i >= 0; i--) {
        reverse += name[i];
    }
    return reverse;
}
let name = prompt("Enter a string: ");
console.log(revString(name));