window.addEventListener("DOMContentLoaded", () => {
	const $form = document.querySelector("form");
	const $input = document.getElementById("form--input");
	const $codedLetters = document.getElementById("codeLetters");
	const $numTries = document.getElementById("wrapper--tries");
	const btn = document.getElementById("restart");

	let chances = 5;
	const $words = [
		"javascript",
		"cuncurrency",
		"multithreading",
		"algorithms",
		"attribute",
		"inheritance",
		"statement",
	];
	let $codeWord = [];

	function startGame() {
		//chose the word from the array
		let $currentWord = $words[Math.floor(Math.random() * $words.length)];
		$currentWord = $currentWord.toUpperCase();
		console.log($currentWord);
		// pupolate the array with underscores
		for (let i = 0; i < $currentWord.length; i++) {
			$codeWord.push("__");
		}
		displayCodedLetters($codeWord);
		displayChances();
		// get the user's input (guess)
		$form.addEventListener("submit", (e) => {
			e.preventDefault();
			if (chances == 0) {
				return;
			}
			const value = $input.value.toUpperCase().trim();
			if (!value || value.length > 1) {
				return alert("Please enter a single letter");
			}
			$input.value = " ";
			$input.focus();
			console.log(value);

			checkLetter(value, $currentWord, $codeWord);
		});
	}
	//printing up the coded word letters
	function displayCodedLetters(word) {
		document.querySelectorAll(".coded-letter").forEach((el) => el.remove());
		for (let i = 0; i < word.length; i++) {
			const $codedLetter = document.createElement("li");
			$codedLetter.innerText = word[i];
			$codedLetter.classList.add("coded-letter");
			$codedLetters.appendChild($codedLetter);
		}
	}
	// pring the text with the number of chances left
	function displayChances() {
		$numTries.innerText = "You have " + chances + " tries left.";
	}
	// check if a user made a right guess and update the coded word (_ _ _)
	//and number of chances in case of wrong guess
	function checkLetter(value, word, code) {
		let wrongGuess = true;
		for (let i = 0; i < word.length; i++) {
			if (word[i] === value) {
				code[i] = value;
				wrongGuess = false;
			}
		}
		if (wrongGuess) {
			chances--;
		}
		displayCodedLetters(code);
		displayChances();
	}

	// restart the game
	btn.addEventListener("click", location.reload);

	startGame();
});
