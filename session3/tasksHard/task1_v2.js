// Create a function that takes in a number as an argument and returns the number of trailing zeros
// in its factorial using recursion.

function trailingZeros(num) {
	if (num === 0) {
		return 0;
	}
	if ((num % 5) == 0 && num > 0) {
		return 1 + trailingZeros(num - 1);
	}

	return trailingZeros(num - 1);
}

console.log(trailingZeros(13));

// 10 1 + function(9)
// 9
// 8
// 7
// 6
// 5 - 1 + function (4)
// 4 function(3)
// 3
// 2
// 1
// 0 0