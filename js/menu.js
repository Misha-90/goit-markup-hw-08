(() => {
	const refs = {
		openMenuBtn: document.querySelector(".mob__menu-btn-open"),
		closeMenuBtn: document.querySelector(".mob__menu-btn-close"),
		menu: document.querySelector(".mob__menu"),
		body: document.querySelector("body"),
		menuList: document.querySelector(".mob-menu-list"),
	};

	refs.openMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);


	function toggleMenu() {
		refs.menu.classList.toggle("is-hidden");
		refs.body.classList.toggle("no-scroll");
		refs.menu.classList.toggle("is-open");
	}

	function removeMenu() {
		refs.menu.classList.add("is-hidden");
	}
})();
