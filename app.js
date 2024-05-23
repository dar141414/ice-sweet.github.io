const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const block = document.querySelector('.block');


burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.body.classList.toggle('scroll-hidden')
});


block.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.body.classList.toggle('scroll-hidden')
});