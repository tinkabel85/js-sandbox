const hamburger = document.querySelector(".checkbox ");
const menu = document.querySelector(".menu");
console.log('hello')
hamburger.addEventListener("click", (e) => {
	menu.classList.toggle("clicked");
});

