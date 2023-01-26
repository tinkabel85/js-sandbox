// Task 7:
console.log(`Task 7, while loop to print out the first 10 prime numbers`);
let isPrime = true;
let i = 2;
let n = 0;
while (n < 10) {
	let j = 2;
	while (j < i - 1) {
		if (i % j === 0) {
			isPrime = false;
			break;
		}
		j++;
	}
	if (isPrime) {
		console.log(i);
		n++;
	}
	isPrime = true;
	i++;
}

// for (let i = 2; i <= 10; i++) {
// 	for (let j = 2; j < i - 1; j++) {
// 		if (i % j === 0) {
// 			isPrime = false;
// 			break;
// 		}
// 	}
// 	if (isPrime) {
// 		console.log(i);
// 	}
// 	isPrime = true;
// }

// console.log("end");
