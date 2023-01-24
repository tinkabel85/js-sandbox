let radius = 15;
let height = 20;

// the volume of a cylinder given the radius and height
// V=πr2h
function volume(r, h) {
	let result = Math.PI * radius ** 2  * height;
	return result.toFixed(2);
}

console.log("The volume of a cylinde: ", volume(radius, height));

// surface area of a sphere
// A=4πr2
function surfaceArea(r) {
	let area = 4 * Math.PI * radius ** 2;
	return area.toFixed(2);
}

console.log("The surface area of the sphere: ", surfaceArea(radius));

// distance between two points in 2D space
//  ((x2-x1)^2 + (y2-y1)^2)^(1/2)
let x1 = 3;
let y1 = 4;
let x2 = 4;
let y2 = 3;
let a = x2 - x1;
let b = y2 - y1;

function distance(a, b) {
	return Math.sqrt(a * a + b * b);
}

function distance2(x1, x2, y1, y2) {
	return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function distance3(a, b) {
	return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(
	"The distance between two points in 2D space: ",
	distance2(x1, x2, y1, y2)
);
console.log(
	"One more: distance between two points in 2D space: ",
	distance3(a, b)
);
