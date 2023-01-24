// Task 6:
console.log(
	`Task 6,  for loop to print out the first 10 numbers in the Fibonacci sequence:`
);
let n1 = 0;
let n2 = 1;
let next = n1 + n2;
console.log(n1);
console.log(n2);
for (let i = 3; i <= 10; i++) {
    console.log(next);
	n1 = n2;
	n2 = next;
	next = n1 + n2;
}
