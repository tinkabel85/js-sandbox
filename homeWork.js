// const operator = prompt(`Enter operator from the following: + / -, * or / :`);

// Task 1: Calculator
let a = 6;
let b = 10;
let operator = "*";

function calculator(a, b) {
	let addition = a + b;
	let subtraction = a - b;
	let multiplication = a * b;
	let division = a / b;
	console.log(
		"a + b =",
		addition + "; " + "a - b =",
		subtraction + "; " + "a / b =",
		multiplication + "; " + "a / b =",
		division
	);
}

calculator(a, b);

// Task 2: Temperature convertor
let fahr = 40;
function fahrToCelc(fahr) {
	let result = ((fahr - 32) * 5) / 9;
	return Math.round(result);
}
console.log("Fahrenheit to Celsius : " + fahrToCelc(fahr));

// Task 3: Odd/Even number
let number = 42;

if (number % 2) {
	console.log(`Your number ${number} is odd`);
} else {
	console.log(`Your number ${number} is even`);
}

// Task 4: Voting eligibility

let age = 28;
let name = "Oksana";
function voteEligibility(age, name) {
	if (age < 18) {
		console.log(`${name} is not eligible for voting.`);
	} else if (age == 18) {
		console.log(`${name} is now eligible for voting. Congrats!`);
	} else {
		console.log(`${name} is eligible for voting.`);
	}
}

voteEligibility(age, name);

// Task 5: Area of Triangle (Area = √[s(s-a)(s-b)(s-c)])

let side1 = 5;
let side2 = 6;
let side3 = 7;

function triangleArea(side1, side2, side3) {
	let perimeter = (side1 + side2 + side3) / 2;
	let area = Math.sqrt(
		perimeter *
			((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
	);
	return area.toFixed(2);
}
console.log(triangleArea(side1, side2, side3));


// Task 5: Check if number is divisible by second number

let firstNumber = 10;
let secondNumber = 5;

if (firstNumber % secondNumber == 0) {
	console.log(`Number ${firstNumber} is divisible by ${secondNumber}`);
} else {
	console.log(`Number ${firstNumber} is not divisible by ${secondNumber}`);
}
