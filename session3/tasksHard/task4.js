// Create a function that takes in a string and a callback function as an argument, then calls the callback function with the result of the string reversed, 
// passed through another callback function that takes the result and returns the number of vowels in the string.

let string = 'Some string';
function myFunction(string, cb) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string.charAt(i);
    }
    console.log(reversed);
    return cb(reversed);
}
function numberOfVowels(string) {
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


console.log(myFunction(string, numberOfVowels));