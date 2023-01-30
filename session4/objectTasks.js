// 1. Write a function that takes in an object and a key, and returns the value of that key.
// If the key does not exist, the function should return a default value.

function keyOfObject(obj, key) {
	if (!(key in obj)) {
		return null;
	}
	return obj[key];
}

let user = {
	height: 201,
	name: "Jam",
	surname: "Johnes",
	age: 5,
	height: 14,
	weight: 3,
	walk: function () {
		console.log("I am walking");
	},
};

console.log(`The value of "name" is ${keyOfObject(user, "name")}.`);

console.log("************************************************************");

// 2. Write a function that takes in an object and a key, and renames that key in the object.

function renameKey(obj, key, newValue) {
	if (!(key in obj)) {
		return null;
	}
	obj[key] = newValue;
	return obj;
}
console.log(renameKey(user, "surname", "Lakin"));

console.log("************************************************************");

// 3. Write a function that takes in an object and a key,
// and returns true if the value associated with that key is a function and false otherwise.

function isKeyFunction(obj, key) {
	return typeof obj[key] === "function";
}

console.log(isKeyFunction(user, "walk"));
console.log(isKeyFunction(user, "name"));

console.log("************************************************************");

// 4. Write a function that takes in an object and returns a new object that only includes the key-value pairs where the key is a string of a specific length.

function makeNewObject(obj) {
	let newObj = {};
	for (key in obj) {
		if (typeof key == "string" && key.length == 4) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
console.log("New object: ");
console.log(makeNewObject(user));

console.log("************************************************************");

// 5. Write a function that takes in an object and returns a new object that only includes the key -
// value pairs where the value is a number that is within a specific range.

function makeNewObjectWithNumber(obj) {
	let newObject = {};
	for (key in obj) {
		if (typeof obj[key] == "number" && obj[key] > 10 && obj[key] < 20) {
			newObject[key] = obj[key];
		}
	}
	return newObject;
}

console.log(makeNewObjectWithNumber(user));

console.log("************************************************************");

// 6. Write a function that takes in an object and a key, and returns the number of characters in the value of that key.

function countCharsInValue(obj, key) {
	if (!(key in obj) && (typeof obj[key] != "string")) {
		return null;
	}
	return obj[key].length;
}
console.log(user);
console.log(countCharsInValue(user, "name"));

console.log("************************************************************");

// 7. Write a function that takes in an object and an array of keys, and returns a new object that only includes the key-value pairs where the key is not in the array.

function makeNewObject2(obj, arr) {
	let newObj = {};
	for (key in obj) {
		if (!arr.includes(key)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

let array = ["title", "height", "weight"];
console.log(makeNewObject2(user, array));
