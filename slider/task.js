'use strict';

const btnPrevious = document.querySelector('.slider__arrow_prev');
const btnNext = document.querySelector('.slider__arrow_next');
const slides = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));
let currentSlide = 0;
sliderDots[currentSlide].classList.add('slider__dot_active');


const slideSwitch = (direction) => () => {
  slides[currentSlide].classList.remove('slider__item_active');
  sliderDots[currentSlide].classList.remove('slider__dot_active');

  currentSlide += direction;
  currentSlide = currentSlide === slides.length ? 0 : currentSlide;
  currentSlide = currentSlide === -1 ? slides.length - 1 : currentSlide;

  slides[currentSlide].classList.add('slider__item_active');
  sliderDots[currentSlide].classList.add('slider__dot_active');
};

const slideSwitchByDots = (newSlide) => () => {
  slides[currentSlide].classList.remove('slider__item_active');
  sliderDots[currentSlide].classList.remove('slider__dot_active');

  currentSlide = newSlide;

  slides[currentSlide].classList.add('slider__item_active');
  sliderDots[currentSlide].classList.add('slider__dot_active');
};


btnNext.onclick = slideSwitch(1);
btnPrevious.onclick = slideSwitch(-1);
sliderDots.forEach((dot, index) => {
  dot.onclick = slideSwitchByDots(index);
});
