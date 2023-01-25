// Task 5
// Write a program that finds the first non-repeated character in a given string.
let string = "helloehworld";

// string = string.toLowerCase();

for (let i = 0; i < string.length; i++) {
	let char = string.charAt(i);

	if (string.indexOf(char) === i && string.indexOf(char, i + 1) == -1) {
		console.log(char);
		break;
	} 
}
