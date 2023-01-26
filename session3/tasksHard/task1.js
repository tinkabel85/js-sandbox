// Create a function that takes in a number as an argument and returns the number of trailing zeros 
// in its factorial using recursion.

function factorial(n) {
	if (n <= 1) {
			return 1;
		}
	return n * factorial(n - 1);
}

//console.log(factorial(n));
let counter = 0;
function countTrailingZeros(n) {
	if (n % 10 !== 0) {
		return counter;
	}
	return countTrailingZeros(n / 10, counter++);
}
//console.log(countTrailingZeros(n));

function trailingZeros(n) {
    let fact = factorial(n);
    console.log(`Factorial of ${n} is ${fact}`)
    return countTrailingZeros(fact);
}

//console.log(trailingZeros(n));

let trailingZerosN = 13;
console.log(trailingZeros(trailingZerosN));