// Create a program that generates a sequence of the first n number in the look-and-say
// sequence. The look-and-say sequence starts with "1" and the next number is the reading of
// the previous number: "one 1" becomes "11" and "two 1s" becomes "21"
// (https://en.wikipedia.org/wiki/Look-and-say_sequence)
let string = "1211";
console.log(string.length);
let result = "";
let i = 0;
// Loop until we reach the end of the string
while (i < string.length) {
    count = 1;
	console.log(string[i]);
	// count the number of repeated char in the string; store in count variable
    while (i + 1 < string.length && string[i + 1] === string[i]) {
		count++;
		i++;
	}
	// as soon as the next char is different from the current char, 
	// add counter and current char to the result
	result += count + string[i];
	i++;
}
console.log(result);
