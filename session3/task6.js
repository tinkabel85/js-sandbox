//Create a function that takes in two numbers as arguments, and using a loop,
//returns the result of multiplying them together.

function multiply(a, b) {
	result = 0;
	for (i = 0; i < b; i++) {
		result += a;
	}
	return result;
}

let a = 5;
let b = 9;

console.log(`The result of ${a} multiplied by ${b} is ${multiply(a, b)}.`);
