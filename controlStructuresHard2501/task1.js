// Write a program that checks if a given string contains any duplicate characters.

let string = "Geekforgeeks";

function checkDuplicate(str) {
	let arr = str.split("");
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				console.log(arr[j]);
                return true;
			}
		}
	}
	return false;
}

console.log(checkDuplicate(string));
