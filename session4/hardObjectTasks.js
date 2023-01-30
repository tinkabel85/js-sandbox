// 1. Write a function that takes in an object and returns a new object with all its values as functions that when called, return the original value.

function newObject(obj) {
	let newObj = {};
	for (let key in obj) {
		newObj[key] = () => obj[key];
	}
	return newObj;
}

let user = {
	name: "Jam",
	surname: "Johnes",
	age: 5,
	height: 14,
	weight: 3,
};
console.log(newObject(user));
console.log("***********************************************");

// 2. Write a function that takes in an object, and returns a new object with all its key-value pairs sorted by the length of the keys.
function sortObject(obj) {
	let newObj = {};
	let sortedArray = [];
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			sortedArray.push(key);
		}
	}
	sortedArray.sort((prev, next) => {
		if (prev.length > next.length) return 1;
		if (prev.length < next.length) return -1;
	});
	//console.log(sortedArray);
	for (val of sortedArray) {
		newObj[val] = obj[val];
	}
	return newObj;
}
console.log(sortObject(user));

console.log("***********************************************");
//3. Write a function that takes in an object and a key, and returns the value of that key. If the key does not exist, the function should return the value of the nearest key in alphabetical order.
function findNearestKey(obj, key) {
	if (key in obj) {
		return obj[key];
	}
	let sortedObj = sortObject(obj);
	let lastCandidate = "";
	for (let keyCandidate in sortedObj) {
		if (keyCandidate.length >= key.length) {
			return keyCandidate.length - key.lengh < key.lengh - lastCandidate.length
				? sortedObj[keyCandidate]
				: sortedObj[lastCandidate];
		}
		lastCandidate = keyCandidate;
	}
	return sortedObj[lastCandidate];
}
console.log(findNearestKey(user, "somePropertyName"));
