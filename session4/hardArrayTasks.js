// 1. Write a function that takes an array of integers and returns the sum of the two largest numbers in the array.
let array = [2, 5, 6, 9, 10, 3, 8, 20, 7];
let array2 = [3, 5, 8, 5, 1, 2, 12];
function sumOfLargestTwo(array) {
	let largest = array[0];
	let second = array[1];

	if (largest < second) {
		largest = array[1];
		second = array[0];
	}
	for (let i = 2; i < array.length; i++) {
		if (array[i] > largest) {
			second = largest;
			largest = array[i];
		}
	}
	return largest + second;
}

console.log(
	`The sum of 2 largest numbers in the array is ${sumOfLargestTwo(array)}.`
);
// console.log(sumOfLargestTwo(array2));

console.log(
	"***********************************************************************"
);

// 2. Write a function that takes an array of integers and returns the second smallest number in the array.
function findSecondSmallest(array) {
	let smallest = array[0];
	let secondSmallest = array[1];

	for (let i = 0; i < array.length; i++) {
		if (array[i] < smallest) {
			smallest = array[i];
		}
	}

	for (let i = 0; i < array.length; i++) {
		if (array[i] < secondSmallest && array[i] > smallest) {
			secondSmallest = array[i];
		}
	}
	return secondSmallest;
}
console.log(
	`The second smallest number in the array is ${findSecondSmallest(array)}.`
);
//console.log(findSecondSmallest(array2));

console.log(
	"***********************************************************************"
);

// 3. Write a function that takes an array of integers and returns an array of the unique integers.
function uniqueArray(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array.lastIndexOf(array[i]) !== array.indexOf(array[i])) {
			continue;
		}
		newArray.push(array[i]);
	}
	return newArray;
}

let array3 = [2, 5, 2, 6, 3, 9, 9, 10, 3, 8, 20, 7];
let array4 = [2, 3, 4, 1, 1, 1, 2, 5];
console.log(`Array of the unique integers is [${uniqueArray(array4)}].`);

// 4. Write a function that takes two arrays and returns an array of all elements that exist in both arrays.

function mergedArray(arr1, arr2) {
	for (let i = 0; i < arr2.length; i++) {
		arr1.push(arr2[i]);
	}
	return arr1;
}
console.log(
	`The array of all elements from both arrays is [${mergedArray(
		array3,
		array4
	)}].`
);

// 5. Write a function that takes an array of integers and returns the majority element (the element that appears more than half the time).

function majorityElArray(array) {
	let maxCount = 0;
	let index;
	for (let i = 0; i < array.length; i++) {
		let count = 0;
		for (let j = 0; j < array.length; j++) {
			if (array[i] == array[j]) {
				count++;
			}
		}
		if (count > maxCount) {
			maxCount = count;
			index = i;
		}
	}
	if (maxCount > array.length / 2) {
		//console.log(maxCount);
		//console.log(array.length / 2);
		return array[index];
	}
	return null;
}
let arr = [1, 2, 2, 3, 4, 2, 2, 5, 2, 3, 2, 2, 1];
console.log(`The majority element of the array is ${majorityElArray(arr)}.`);

// 6. Write a function that takes an array of integers and returns an array of all the possible subsets of that array.

function arrayOfSubsets(array) {
	let arrayOfSubsets = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            let subset = array.slice(i, j + 1); //end is not included
            //console.log(subset);
            arrayOfSubsets.push(subset);
		}
    }
    return arrayOfSubsets;
}

//array2 = [3, 5, 8, 5, 1, 2, 12];
console.log(arrayOfSubsets(array2));
