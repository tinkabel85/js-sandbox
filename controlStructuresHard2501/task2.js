// Task 2 
// Write a program that replaces all occurrences of a given character with another character in a given string.

let str = 'Hello World!';
let char = "o";
let replacement = "O";

newStr = str.split(char).join(replacement);
console.log(newStr);


console.log("**************************************************************");

function replace(str, char, replacement) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            str = str.replace(char, replacement);
        }
    }
    return str;
}

console.log(replace(str, char, replacement));
