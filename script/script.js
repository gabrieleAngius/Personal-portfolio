let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("toggle"); // hamburger (default) - croce (X)
    menu.classList.toggle("show"); // mostra / nasconde la barra di navigazione
});
