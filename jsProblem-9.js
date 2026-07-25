// Problem-9: Largest and smallest number in array

const prompt = require("prompt-sync")();
let arr = prompt("Enter numbers: ").split(" ").map(Number);

let mn = arr[0], mx = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>mx) mx = arr[i];
    if(arr[i]<mn) mn = arr[i];
}
console.log("Minimum value: ", mn);
console.log("Maximum value: ", mx);