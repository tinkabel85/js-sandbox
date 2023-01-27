// 1. Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

let array = [1, 2, 3, 4, 5, 5, 7, 8, 9];

function sum(array) {
	let sum = array.reduce((acc, curr) => acc + curr, 0);
	return sum;
}

console.log(`The sum of all number in the array is ${sum(array)}.`);

console.log(
	"***********************************************************************"
);

// 2. Write a function that takes in an array of numbers and returns the largest number in the array.

function theLargest(array) {
	let large = array[0];
	for (num of array) {
		if (large < num) {
			large = num;
		}
	}
	return large;
}
console.log(`The largest number in the array is ${theLargest(array)}.`);

console.log(
	"***********************************************************************"
);
// 3. Write a function that takes in an array of numbers and returns the smallest number in the array.

function theSmallest(array) {
	let small = array[0];
	for (num of array) {
		if (small > num) {
			small = num;
		}
	}
	return small;
}
console.log(`The largest number in the array is ${theSmallest(array)}.`);
console.log(
	"***********************************************************************"
);

// 4. Write a function that takes in an array of numbers and returns the average of all the numbers in the array.

function average(array) {
	let sum = array.reduce((acc, curr) => acc + curr, 0);
	return sum / array.length;
}

console.log(`The average of all numbers in the array is ${average(array)}.`);

console.log(
	"***********************************************************************"
);

// 5. Write a function that takes in an array of numbers and returns a new array of only the even numbers.

function evenNum(array) {
	let evenArray = [];
	for (num of array) {
		if (num % 2 == 0) {
			evenArray.push(num);
		}
	}
	return evenArray;
}

console.log(`The new array with only even numbers is ${evenNum(array)}.`);
console.log(evenNum(array));

console.log(
	"***********************************************************************"
);

// 6. Write a function that takes in an array of numbers and returns a new array of only the odd numbers.

function oddNum(array) {
	let oddArray = [];
	for (num of array) {
		if (num % 2 != 0) {
			oddArray.push(num);
		}
	}
	return oddArray;
}

console.log(`The new array with only odd numbers is ${oddNum(array)}.`);
console.log(oddNum(array));
console.log(
	"***********************************************************************"
);

// 7. Write a function that takes in an array of numbers and returns the index of the first occurrence of a specific number.

let number = 5;
function indexOfOccurence(array, number) {
	let found = false;
	let i;
	for (i = 0; i < array.length && !found; i++) {
		found = number == array[i];
	}
	return found ? i - 1 : -1;
}
console.log(
	`The index of the first occurance of '${number}' is ${indexOfOccurence(
		array,
		number
	)}.`
);

console.log(
	"***********************************************************************"
);

// 8. Write a function that takes in an array of numbers and returns the index of the last occurrence of a specific number.

function findLastIndex(array, num) {
	let found = false;
	let i;
	for (i = array.length; i >= 0 && !found; i--) {
		found = num == array[i - 1];
	}
	return found ? i : -1;
}
console.log(
	`The index of the last occurance of '${number}' is ${findLastIndex(
		array,
		number
	)}.`
);

console.log(
	"***********************************************************************"
);

// 9. Write a function that takes in an array of numbers and returns a new array of numbers that are in sorted order.
let array2 = [3, 6, 2, 8, 6, 8, 3, 1, 10];
function sortArray(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

console.log(sortArray(array2));

console.log(
	"***********************************************************************"
);

// 10. Write a function that takes in an array of numbers and returns a new array of numbers that are in reverse sorted order.

function reverseArray(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] < array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

console.log(reverseArray(array2));
