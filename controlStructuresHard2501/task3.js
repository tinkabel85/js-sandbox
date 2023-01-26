// Task3
// Write a program that removes all vowels from a given string.

let str = "Some strIng with voeuwels";
function removeVowels(str) {
	for (let i = str.length-1; i >=0; i--) {
		str = str.toLowerCase();
		if (
			str[i] === "a" ||
			str[i] === "e" ||
			str[i] === "i" ||
			str[i] === "o" ||
			str[i] === "u"
		) {
			str = str.slice(0, i) + str.slice(i + 1);
			//str = str.replace(str[i], '');
			// console.log(str);
		}
	}
	return str;
}
console.log(removeVowels(str));
