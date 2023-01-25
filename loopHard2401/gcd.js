// Create a program that finds the greatest common divisor (GCD) of two numbers using the 
// Euclidean algorithm. The GCD is the largest number that divides both numbers without a 
// remainder.

let num1 = 270;
let num2 = 192;
// let num1 = 35;
// let num2 = 10;
let remainder;
let gcd;
if (num1 == 0) {
    gcd = num2;
}
if (num2 == 0) {
    gcd = num1;
}
while ((num1 % num2) > 0) {
    remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
}
console.log(num2);

// ***********************************
// while (num2 !== 0) {
//     gcd = num2;
//     num2 = num1 % num2;
//     num1 = gcd;
// }

// console.log(gcd)