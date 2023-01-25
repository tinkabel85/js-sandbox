// Task6:
// Write a number, that prints out the first n characters of a string only

let n = 5;
let string = "Hello World!";
let myString = "";
for (let i = 0; i < n; i++) {
    console.log(string[i]);
    myString += string[i];
}

console.log(myString);