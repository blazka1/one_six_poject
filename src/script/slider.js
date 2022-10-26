import Swiper from 'swiper';
import 'swiper/css';

const allElementSlider = document.querySelectorAll(".repair-brands__slide");
const allRepairTechSlide = document.querySelectorAll('.repair-tech__slide');

const visibleMore = document.querySelector('.btn-more');
const visibleMore2 = document.querySelector('.btn-more2');




visibleMore.addEventListener('click',  () => {
    for (let i = 0; i < allElementSlider.length; i++) {
        allElementSlider[i].classList.toggle('visible');
    }
    if (visibleMore.classList.contains('close')) {
        visibleMore.classList.remove('close');
        visibleMore.classList.add('open');
        visibleMore.textContent = 'Скрыть';

    } else if (visibleMore.classList.contains('open')) {
        visibleMore.classList.remove('open');
        visibleMore.classList.add('close');
        visibleMore.textContent = 'Показать все';

    }

})

visibleMore2.addEventListener('click',  () => {
    for (let i = 0; i < allRepairTechSlide.length; i++) {
        allRepairTechSlide[i].classList.toggle('visible');
    }
    if (visibleMore2.classList.contains('close')) {
        visibleMore2.classList.remove('close');
        visibleMore2.classList.add('open');
        visibleMore2.textContent = 'Скрыть';

    } else if (visibleMore2.classList.contains('open')) {
        visibleMore2.classList.remove('open');
        visibleMore2.classList.add('close');
        visibleMore2.textContent = 'Показать все';

    }

})
if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        slidesPerView: 'auto',
    });
    const swiper2 = new Swiper('.swiper2', {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination2',
            clickable: true
        },
        slidesPerView: 'auto',
    });
    const swiper3 = new Swiper('.swiper3', {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination3',
            clickable: true
        },
        slidesPerView: 'auto',
    });

}

if (window.innerWidth >= 768) {
    for (let i = 0; i < 6; i++) {
        allElementSlider[i].style.display = "flex";
    }
    for (let i = 0; i < 3; i++) {
        allRepairTechSlide[i].style.display = "flex";
    }

}

if (window.innerWidth >= 1120) {
    for (let i = 0; i < 8; i++) {
        allElementSlider[i].style.display = "flex";
    }
    for (let i = 0; i < 4; i++) {
        allRepairTechSlide[i].style.display = "flex";
    }
}


//Второй слайдер


