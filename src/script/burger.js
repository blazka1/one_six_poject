const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.burger-container');
const iconBurgerClose = document.querySelector('.icon-burger-close');
const swiperStyle = document.querySelectorAll('.swiper');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menu.style.transition = "all 0.4s ease";
    swiperStyle.forEach(e => e.classList.toggle('active'));
})
iconBurgerClose.addEventListener('click', function(){
	menu.classList.toggle('active');
    swiperStyle.forEach(e => e.classList.toggle('active'));
})
