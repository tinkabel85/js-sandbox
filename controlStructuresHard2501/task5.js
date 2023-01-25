// Task 5
// Write a program that finds the first non-repeated character in a given string.
let string = "Helloworld";

string = string.toLowerCase();

for (let i = 0; i < string.length; i++) {
	let char = string.charAt(i);
	if (string.indexOf(char) === string.lastIndexOf(char)) {
		console.log(char);
		break;
	} 
}
