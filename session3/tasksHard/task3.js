// Create a function that takes in a number and a callback function as an argument, then calls the callback function with the result of the number squared, 
//passed through another callback function that takes the result and returns true if the number is even, and false if odd

function first(cb, n) {
    let sqrt = n ** 2;
    console.log(sqrt)
    return cb(sqrt);
}

function second(n) {
    return isEven(n);
}


function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(first(second, 6))