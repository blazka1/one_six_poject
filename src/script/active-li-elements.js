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

const cutTextSelector = document.querySelector('.info__container-about-us-cut-block');

cutTextSelector.style.maxHeight = window.innerWidth > 768 ? '205px' : '125px'

let readMore = document.querySelector('.read-next')

readMore.addEventListener('click', (e) => {
    cutTextSelector.style.maxHeight = 'fit-content'
    e.currentTarget.style.display = 'none'
})