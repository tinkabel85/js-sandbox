// Create a function that takes in a string as an argument
// and returns true if it is a palindrome, and false if it is not.

let string = 'Racecar';

function isPalindrome(string) {
    string = string.toLowerCase();
    let isPalindrome = true;

    for (let i = 0; i < string.length/2 && isPalindrome; i++){
        isPalindrome = (string.charAt(i) === string.charAt(string.length - i - 1)) 
    }
    return isPalindrome;
}

console.log(`The string '${string}' is palindrom: ${isPalindrome(string)}.`);