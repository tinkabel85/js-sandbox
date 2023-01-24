// prompt user for input
// const operator = prompt("Enter operator from the following options:  +, -, * or / : ");
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));
const operator = "+";
let number1 = 10;
let number2 = 20;

let result;

if (operator == "+") {
	result = number1 + number2;
} else if (operator == "-") {
	result = number1 - number2;
} else if (operator == "*") {
	result = number1 * number2;
} else {
	result = number1 / number2;
}

// printing the result of calculation
console.log(`${number1} ${operator} ${number2} = ${result}`);
