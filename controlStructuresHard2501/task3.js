// Task3
// Write a program that removes all vowels from a given string.

let str = "Some strIng with vowels";
function removeVowels(str) {
	for (let i = 0; i < str.length; i++) {
		str = str.toLowerCase();
		console.log(str[i]);
		if (
			str[i] === "a" ||
			str[i] === "e" ||
			str[i] === "i" ||
			str[i] === "o" ||
			str[i] === "u"
		) {
			str = str.slice(0, i) + str.slice(i + 1);
			//str = str.replace(str[i], '');
			console.log(str);
		}
	}
	return str;
}
console.log(removeVowels(str));

// there is still some bug - in case we have a couple of vowels one after another (e.g. "Soeme"), 
// the second one will not be removed, because the next iteration starts from the i+1 position
