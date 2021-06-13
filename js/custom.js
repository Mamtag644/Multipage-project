const mainMenu =document.querySelector('.mainMenu')
const closeMenu =document.querySelector('.closeMenu')
const openMenu =document.querySelector('.openMenu')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(params) {
    mainMenu.style.display = 'flex';
    mainMenu.style.top ='0';
    
}

function close(params) {
    mainMenu.style.top = '-100%';
}

//javascript for scroll to top button
const scrollBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', function () {
	scrollBtn.classList.toggle('active', window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
