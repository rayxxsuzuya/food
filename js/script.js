
let menu = {
	btn: document.querySelector('#header-menu'),
	aside: document.querySelector('.aside'),
	line: document.querySelectorAll('.header__menu-line'),
}

menu.btn.addEventListener('click', (e) => {
	e.preventDefault();
	menu.btn.classList.toggle('active');
	menu.aside.classList.toggle('active');
	for(let i = 0; i < menu.line.length; i++) {
		menu.line[i].classList.toggle('active');
	}
});