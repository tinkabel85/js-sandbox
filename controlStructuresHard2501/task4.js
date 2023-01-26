//Task 4
// Write a program that checks if a given string is a pangram 
// (a sentence that contains every letter of the alphabet at least once).

let str = "The quick brown fox jumps over the lazy dog";
let str2 = "I am not a pangram";

function isPangram(str) {
    str = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }
    return true;

}

console.log(isPangram(str));