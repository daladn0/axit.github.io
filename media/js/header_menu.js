let buttonOpen = document.querySelector('.header__burgerMenu');
let buttonClose = document.querySelector('header .adaptive .exit');
let adaptiveMenu = document.querySelector('header .adaptive');

buttonOpen.addEventListener('click', function(){
	window.scrollTo(0,0);
	document.body.style.overflow = 'hidden';

	adaptiveMenu.classList.add('active');
});

buttonClose.addEventListener('click', function(){
	document.body.style.overflow = '';
	adaptiveMenu.classList.remove('active');
});