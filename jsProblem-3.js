/**
 * Give you a number, if the number is divisible by 3 then print: Fizz
 *               Else if the number is divisible by 5 then print: Buzz
 *               Else if the number is divisible by both then print: FizzBuzz
 *               Else print the given number
 */
const prompt = require("prompt-sync")();
// 1
// let number = Number(prompt("Enter a number: "));
// function FizzBuzz(number) {
//   if (number % 3 == 0 && number % 5 == 0) {
//     console.log("FizzBuzz");
//   }
//   else if (number % 3 == 0) {
//     console.log("Fizz");
//   }
//   else if (number % 5 == 0) {
//     console.log("Buzz");
//   }
//   else console.log(number);
// } // FizzBuzz(number);


// 2
let number2 = Number(prompt("Enter a number2: "));
for (let i = 1; i <= number2; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else console.log(i);
}
