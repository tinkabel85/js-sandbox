const hamburger= document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", (e) => {
	menu.classList.toggle("clicked");
});

