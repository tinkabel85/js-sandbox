// Create a function that takes in a number as an argument 
//and returns the result of finding the factorial of that number.

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

let n = 5;
console.log(`The factorial of ${n} is ${factorial(n)}.`);