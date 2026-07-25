// Problem 6: Count Vowels in a String
const prompt = require("prompt-sync")();

function vowelCount(string){
    let countVowel = 0;
    for(let ch of string){
        if(ch=='A' ||ch=='E' ||ch=='I' ||ch=='O' ||ch=='U' ||ch=='a' ||ch=='e' ||ch=='i' ||ch=='o' ||ch=='u'){
            countVowel++;
        }
    } return countVowel;
}
let word = prompt("Enter a string: ");
console.log(vowelCount(word));
