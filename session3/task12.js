// Create a function that takes in a number as an argument 
//and returns the factorial of that number using recursion.

let n = 10;

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(n));

// factorial(5) =>
//              return 5 * factorial(4)
//                         => return 4 * factorial(3)
//                                       => return 3 * factorial(2)
//                                                     => return 2 * factorial(1)
//                                                                   => return 1
//                                                        return 2 * 1
//                                         return 3 *2 * 1
//                            return 4 * 3 * 2 * 1
//            return 5 * 4 * 3 * 2 * 1