// import { iconMessageAll } from "./modal-feedback";

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
})


if (window.innerWidth < 1440) {
    const iconMessageBurgerMod = document.querySelector('.icon-message_burger-mod');
    iconMessageBurgerMod.addEventListener('click', function() {
    helpLay.classList.toggle('active');
})

    const iconCallBergerMod = document.querySelector('.icon-call_burger-mod');
    iconCallBergerMod.addEventListener('click', function() {
        helpLay.classList.toggle('active');
    })
}


