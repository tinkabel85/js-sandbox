// Create a program that calculates the nth number in the Lucas series. The Lucas series is 
// similar to the Fibonacci series but starts with 2 and 1.

let n1 = 2;
let n2 = 1;
let n = 10;
let next = n1 + n2;


for (let i = 0; i <= n; i++) {
	console.log(n1);
	n1 = n2;
	n2 = next;
	next = n1 + n2;
}