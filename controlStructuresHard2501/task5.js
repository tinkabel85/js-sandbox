// Task 5
// Write a program that finds the first non-repeated character in a given string.
let string = "Hello, world";

function firstNonRepeatedChar(str) {
	let arr = str.split("");
	let result = "";
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i + 1]) {
			result = arr[i];
			break;
		} else {
			continue;
		}
	}
	return result;
}

for (i = 0; i < string.length; i++) {
    
}
