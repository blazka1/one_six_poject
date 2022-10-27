import {helpLay} from './burger';
import {menu} from './burger';

export const iconCallAll = document.querySelectorAll('.icon-call');
export const modalCall = document.querySelector('.call');
const modalCallClose = document.querySelector('.call__close-btn');
const headButtonCall = document.querySelector('.icon-call_head');



headButtonCall.addEventListener('click', () => {
    helpLay.classList.add('active');
    modalCall.classList.add('active');
    modalCall.style.transition = "all 0.4s ease";
})

modalCallClose.addEventListener('click', function() {
	modalCall.classList.remove('active');

    helpLay.classList.remove('active');
})

