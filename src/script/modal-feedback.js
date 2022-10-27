import {helpLay} from './burger';
import {menu} from './burger';

export const iconMessageAll = document.querySelectorAll('.icon-message');
export const modalFeedback = document.querySelector('.feedback');
const modalFeedbackClose = document.querySelector('.feedback__close-btn');
const headButtonMessage = document.querySelector('.icon-message_head');



headButtonMessage.addEventListener('click', () => {
    helpLay.classList.add('active');
    modalFeedback.classList.add('active');
    modalFeedback.style.transition = "all 0.4s ease";
})

modalFeedbackClose.addEventListener('click', function(){
	modalFeedback.classList.remove('active');

    helpLay.classList.remove('active');
})


