// Create a function that takes in an numbers and using a loop,
// returns the sum of all the numbers

function sum(n) {
	let result = 0;
    for (let i = 1; i <= n; i++) {
		result += i;
	}
	return result;
}

let n = 10;
console.log(`The sum of all the numbers of ${n} is ${sum(n)}.`);
