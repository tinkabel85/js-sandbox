// Create a program that calculates the sum of the squares of the first n natural numbers. 

let sum = 0;
let i = 0;
let n = 5;
while (i <= n) {
    sum += Math.pow(i, 2);
    i++;
}
console.log(sum);
