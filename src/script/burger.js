import { modalCall } from "./modal-call";
import { modalFeedback } from "./modal-feedback";

const menuBtn = document.querySelector('.burger');
export const menu = document.querySelector('.burger-container');
const iconBurgerClose = document.querySelector('.icon-burger-close');


export const helpLay = document.querySelector('.help-lay');

menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    helpLay.classList.toggle('active');
    menu.style.transition = "all 0.4s ease";

})

iconBurgerClose.addEventListener('click', function(){
	menu.classList.toggle('active');

    helpLay.classList.toggle('active');
})

helpLay.addEventListener('click', () => {
    menu.classList.remove('active');
    helpLay.classList.remove('active');
    modalCall.classList.remove('active');
    modalFeedback.classList.remove('active');
})

const iconMessageBurgerMod = document.querySelector('.icon-message_burger-mod');
const iconCallBurgerMod = document.querySelector('.icon-call_burger-mod');

iconMessageBurgerMod.addEventListener('click', function() {
    modalFeedback.classList.add('active')
    helpLay.classList.add('active')

    if (window.innerWidth < 522) {
        menu.classList.remove('active');
    }

    if (modalCall.classList.contains('active')) {
        modalCall.classList.remove('active')
    }
});

iconCallBurgerMod.addEventListener('click', function() {
    modalCall.classList.add('active')
    helpLay.classList.add('active')

    if (window.innerWidth < 522) {
        menu.classList.remove('active');
    }

    if (modalFeedback.classList.contains('active')) {
        modalFeedback.classList.remove('active')
    }
});

