// Problem 7: Paliindrome or not
const prompt = require("prompt-sync")();
function revString(word) {
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }
    return reverse;
}
function isPalindrome(word){
    if(revString(word)===word){
        return "Palindrome";
    } else return "Not Palindrome!";
}

let word = prompt("Enter a word: ");
console.log(isPalindrome(word));
