import {helpLay} from './burger';
import {menu} from './burger';

export const iconMessageAll = document.querySelectorAll('.icon-message');
const modalFeedback = document.querySelector('.feedback');
const modalFeedbackClose = document.querySelector('.feedback__close-btn');


iconMessageAll.forEach(e => 
    e.addEventListener('click', function(){ 
    modalFeedback.classList.toggle('active');
    helpLay.classList.toggle('active');
    modalFeedback.style.transition = "all 0.4s ease";
    menu.classList.remove('active');
    }))


modalFeedbackClose.addEventListener('click', function(){
	modalFeedback.classList.toggle('active');

    helpLay.classList.remove('active');
})

helpLay.addEventListener('click', () => {
    modalFeedback.classList.remove('active');
    helpLay.classList.remove('active');
})
