
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
	e.preventDefault();
	window.scrollTo(0,0);
});

window.addEventListener('scroll', function() {
	if (window.pageYOffset >= (recipes.offsetTop + recipes.clientHeight / 20)) {
		scrollTop.classList.add('active');
	} else {
		scrollTop.classList.remove('active');
	}
});

let asideItem = document.querySelectorAll('.aside__item');

for (let i = 0; i < asideItem.length; i++) {
	asideItem[i].addEventListener('click', function() {
		for (let j = 0; j < asideItem.length; j++) {
			asideItem[j].classList.remove('active');
		}
		this.classList.add('active');
	});
}

let recipesTab = document.querySelectorAll('.recipes-tabs__link');
let recipesContent = document.querySelectorAll('.recipes-content');

for (let i = 0; i < recipesTab.length; i++) {
	recipesTab[i].addEventListener('click', function(e) {
		e.preventDefault();
		for (let j = 0; j < recipesTab.length; j++) {
			recipesTab[j].classList.remove('active');
			recipesContent[j].classList.remove('active');
		}
		this.classList.add('active');
		recipesContent[i].classList.add('active');
	});
}