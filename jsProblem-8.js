// Problem-8: Count word from a sentence
const prompt = require("prompt-sync")();

// With function
// let str = prompt("Enter a sentence: ");
// let words = str.split(" ");
// console.log(words.length);



// Without function
let str = prompt("Enter a sentence: ");
str.trim();
let count = 0;
let inWord = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !inWord) {
        count++;
        inWord = true;
    } else if (str[i] === " ") {
        inWord = false;
    }
}
console.log(count);