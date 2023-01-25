// Task5:
// Write a program, that counts how often each character is included in a string

let myString = "geeksforgeeks";

for (let i = 0; i <= myString.length ; i++) {
	let count = 0;
	for (let j = 0; j <= myString.length; j++) {
		if (myString[i] === myString[j]) {
			count++;
			//console.log(myString[i] + " " + count);
		}
    }
    if (count > 1) {
		console.log(`${myString[i]} appears ${count} time(s)`);
        myString = myString.replaceAll(myString[i], "");
        console.log(myString);
		}
}

console.log("****************************************************************");
