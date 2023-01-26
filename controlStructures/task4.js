// Task4:
// Write a program, that detects palindromes

let word = "Racecar";
function isPalindrome(word) {
	word = word.toLowerCase();
	for (i = 0; i < word.length / 2; i++) {
		if (word[i] != word[word.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome(word));
