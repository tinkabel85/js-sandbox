// Task5:
// Write a program, that counts how often each character is included in a string

let myString = "geeksforgeeks";
let counting = true;

while (counting) {
	let count = 0;
	for (let i = 0; i <= myString.length; i++) {
		if (myString[0] === myString[i]) {
			count++;
		}
	}
	if (count >= 1) {
		console.log(`Character ${myString[0]} appears ${count} times`);
		myString = myString.replaceAll(myString[0], "");
	}
	if (myString.length === 0) {
		counting = false;
	}
}

console.log("****************************************************************");


// let string = "geeksforgeeks";

// for (let i = 0; i <= string.length; i++) {
// 	let count = 0;
// 	for (let j = 0; j <= string.length; j++) {
// 		if (string[i] === string[j]) {
// 			count++;
// 		}
// 	}
// 	if (count > 1) {
// 		console.log(`${string[i]} appears ${count} time(s)`);
// 		string = string.replaceAll(string[i], "");
// 	}
// }