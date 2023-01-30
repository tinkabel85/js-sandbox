const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("#range-input");

input.addEventListener("change", (e) => {
	let n = e.target.value;
    document.getElementById('value').innerHTML = n;
	document.querySelectorAll('.box').forEach(el => el.remove())

	for (let i = 0; i < n; i++) {
		const box = document.createElement("div");
		box.classList.toggle("box");
		box.style.backgroundColor = getRandomColor();
		wrapper.appendChild(box);
	}

});

function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
