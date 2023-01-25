// Task5:
// Write a program, that counts how often each character is included in a string

let myString = "mamama";

for (let i = 0; i < myString.length; i++) {
    let count = 1;
    for (let j = i + 1; j < myString.length; j++) {
        if (myString[i] === myString[j]) {
            count++;
        }
    }
	if (count > 1) {
		console.log(`${myString[i]} appears ${count} time(s)`);
	}
}

console.log("****************************************************************");
