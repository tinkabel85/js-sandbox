// Task 8:  while loop to calculate the factorial of a given number

let number = 5;
let result= number;
while (number > 1) {
    number--;
    result = result * number;
}
console.log(result);

// function factorialize(num) {
// 	let result = num;
// 	if (num === 0 || num === 1) return 1;
// 	while (num > 1) {
// 		num--;
// 		result *= num;
// 	}
// 	return result;
// }
// console.log(factorialize(5));