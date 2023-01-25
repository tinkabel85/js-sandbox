// Task8:
// Write a program, that inserts a character into a string at a given position

let str = "Hello";
let position = 2;
let char = "A";

for (let i = 0; i < str.length; i++) {
    if (i == parseInt(position)) {
			str = str.substring(0, i) + char + str.substring(i);
			console.log(str);
		}
}