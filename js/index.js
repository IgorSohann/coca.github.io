const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
  });
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
  });

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
});

const infoBtns = document.querySelectorAll('.info__btn');
const infoTexts = document.querySelectorAll('.info__list-text');

for (let i = 0; i < infoBtns.length; i++) {
  infoBtns[i].addEventListener('click', () => {
    infoTexts[i].classList.toggle('info__list-text--active');
    infoBtns[i].classList.toggle('info-open');
  });
}

const infoBtnss = document.querySelectorAll('.info__btn');
const title = document.querySelectorAll('.info__list-item');

for (let i = 0; i < infoBtns.length; i++) {
  infoBtnss[i].addEventListener('click', () => {
    title[i].classList.toggle('info__list-item--active');
  });
}