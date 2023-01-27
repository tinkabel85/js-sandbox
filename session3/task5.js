// Create a function that takes in a string as an argument
// and returns the string with all the characters in reverse order.

let string = "Hello World";

function reverseString(string) {
	let reverse = "";

	for (let i = string.length; i >= 0; i--) {
		//last char will be (string.length -1)
		reverse += string.charAt(i - 1);
	}
	return reverse;
}

console.log(
	`The reversed version of the string '${string}' is '${reverseString(string)}'`
);
