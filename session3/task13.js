// Create a function that takes in a number and a function as an argument, 
// then calls the provided function with the result of the number multiplied by 2.


function first(n, func) {
    return func(n * 2)
}
function second(arg) {
    return 'Second function called with the args: ' + arg;

}

console.log(first(5, second));