
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

let recipes = document.querySelector('.recipes');
let scrollTop = document.querySelector('.scrollTopButton')

scrollTop.addEventListener('click', function (e) { 
	e.preventDefault;
	window.scrollTo(0,0);
});

window.addEventListener('scroll', function() {
	if (window.pageYOffset >= (recipes.offsetTop + recipes.clientHeight / 20)) {
		scrollTop.classList.add('active');
	} else {
		scrollTop.classList.remove('active');
	}
});

console.log(recipes.offsetTop);