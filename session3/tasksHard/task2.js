// Create a function that takes in a number n as an argument and returns the result of raising it to a power p using recursion.

let exponent = 6;
let number = 2;
function toPower(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    return base* toPower(base, exponent - 1)
}

console.log(`The number ${number} raised to the power of ${exponent} is ${toPower(number, exponent)}`);