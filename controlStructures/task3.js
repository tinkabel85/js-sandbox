// Task3:
// Write a program, that reverts a string
let string = "Hello World";

for (let i = 0; i < string.length; i++) {
	string = string.split("").reverse().join("");
	console.log(string);
	break;
}
