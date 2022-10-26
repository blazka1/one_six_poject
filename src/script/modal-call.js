import {helpLay} from './burger';
import {menu} from './burger';

export const iconCallAll = document.querySelectorAll('.icon-call');
const modalCall = document.querySelector('.call');
const modalCallClose = document.querySelector('.call__close-btn');


iconCallAll.forEach(e => 
    e.addEventListener('click', function(){ 
    modalCall.classList.toggle('active');
    helpLay.classList.toggle('active');
    modalCall.style.transition = "all 0.4s ease";
    menu.classList.remove('active');
    }))


modalCallClose.addEventListener('click', function(){
	modalCall.classList.toggle('active');

    helpLay.classList.remove('active');
})

helpLay.addEventListener('click', () => {
    modalCall.classList.remove('active');
    helpLay.classList.remove('active');
})
