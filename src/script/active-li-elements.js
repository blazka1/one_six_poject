const slideMenuButtons = document.querySelectorAll('.slide-menu__button');

slideMenuButtons.forEach(i => {
    i.addEventListener('click', swipeBtn);
})

function swipeBtn(e) {
    slideMenuButtons.forEach(i => i.classList.remove('slide-menu__button_active'));
    e.currentTarget.classList.add('slide-menu__button_active');
}

const burgerPanelsLi = document.querySelectorAll('.burger-panel__link');

burgerPanelsLi.forEach(i => {
    i.addEventListener('click', swipeLi)
})

function swipeLi(e) {
    burgerPanelsLi.forEach(i => i.classList.remove('burger-panel__link_active'));
    e.currentTarget.classList.add('burger-panel__link_active');
}