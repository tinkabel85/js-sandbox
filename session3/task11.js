// Create a function that takes in a number n as an argument and returns the result of finding 
// the nth number in the Fibonacci sequence using recursion.

let n = 8;
function fib(n) {
    if (n < 1) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(n));
console.log(`Fibonacci ${n} is ${fib(n)}`);