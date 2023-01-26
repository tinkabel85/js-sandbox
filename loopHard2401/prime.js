// Create a program that generates the first n prime numbers. A prime number is a number that 
// is divisible by only 1 and itself

let isPrime = true;

let n = 50;
for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i - 1; j++) {
		if (i % j === 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) {
		console.log(i);
	}
	isPrime = true;
}
