'use strict';

const humburgerBtn = document.querySelector('.humburger');
const openMenu = document.querySelector('.page-header__top');
const petBtn = document.querySelectorAll('.pet-slides__item');
const modalWindow = document.querySelector('.modal-window');
const modalClose = document.querySelector('.modal-window__close');


const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.append(overlay);

petBtn.forEach(function (petBtn) {
    petBtn.addEventListener('click', function () {
        modalWindow.classList.add('open');
        overlay.classList.add('open');
    })

    modalClose.addEventListener('click', function () {
        modalWindow.classList.remove('open');
        overlay.classList.remove('open');
    })

    overlay.addEventListener('click', function () {
        modalWindow.classList.remove('open');
        overlay.classList.remove('open');
    })  
});


const openMobile = () => {
    openMenu.classList.toggle('active');
}

const closeMobile = () => {
    openMenu.classList.remove('active');
}

humburgerBtn.addEventListener('click', openMobile);

document.addEventListener('click', function(event) {
    let isClickInside = openMenu.contains(event.target);
    if(!isClickInside) {
        closeMobile();
    }
})