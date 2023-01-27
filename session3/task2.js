// Task 2
// Create a function that takes in a string as an argument
//and returns the number of vowels in the string using a loop.

let string = "Some random string with vowels";

function countVowels(string) {
	string = string.toLowerCase();
	let vowels = "aeiou";
	let counter = 0;

	for (let i = 0; i < string.length; i++) {
		let c = string.charAt(i);
		for (let j = 0; j < vowels.length; j++) {
			if (c === vowels.charAt(j)) {
				counter++;
				break;
			}
		}
	}
	return counter;
}
console.log(
	`The number of vowels in the string '${string}' is ${countVowels(string)}.`
);
