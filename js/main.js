"use strict"

// PRELOADER SCRIPT

// const preloaderId = document.querySelector('.circle p');
// preloaderId.innerHTML = preloaderId.innerHTML.split('').map((char, i) => `<span style = "transform:rotate(${i * 15}deg)">
// ${char}</span>`).join('');


// const preloader = document.querySelector('[data-preloader]');

// window.addEventListener('load', function(){
//     preloader.classList.add('loadehide');
//     body.classList.add('loadehide');
// });

// add event listener on Multiple elements

// let addEventOnElements = function(elements, eventType, callback){
//     for(let i = 0, len = elements.lenght; i < len; i++){
//         elements[i].addEventListener(eventType, callback);
// }
// }

// const navbarId = document.querySelector('[data-navbar]');
// const navbarToggler = document.querySelectorAll('[data-nav-toggler]');
// const overlayId = document.querySelector('[data-overly]');

// const toggleNavbar = function(){
//     navbarId.classList.toggle('active');
//    // document.body.classList.toggle('active');
//    console.log("azgar khan");
// }
// addEventOnElements(navbarToggler, "click", toggleNavbar);


const addEventOnElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i++)
    elements[i].addEventListener(eventType, callback);
}

const asideId = document.querySelector("[data-navbar]");
const overLayTogglersId = document.querySelectorAll("[data-nav-toggler]");
const overlayId = document.querySelector('[data-overly]');

const toggleNavbar = function(){
    asideId.classList.toggle('active');
    overlayId.classList.toggle("active");
    document.body.classList.toggle('nav-active');
}

addEventOnElements(overLayTogglersId, "click", toggleNavbar);

// SHOW AND HIDE HEADER BAR

const headerId = document.querySelector('[data-header]');
let lastscrobarposi = 0;

const hideheder = function(){
    const isscrollbown = lastscrobarposi < window.scrollY;
    if(isscrollbown){
    headerId.classList.add('hide');
    }else{
        headerId.classList.remove("hide");
    }
    lastscrobarposi = window.scrollY;
}
   

window.addEventListener('scroll', function(){
    if(window.scrollY >= 50){
        headerId.classList.add('active');
        hideheder();
    }else{
        headerId.classList.remove('active');
    }
})

// SLIDER SECTION

let sliderId = document.querySelectorAll('[data-item]');
let currentSlider = 0;
let intervel = null;

window.addEventListener('DOMContentLoaded', firstslider);

function firstslider(){
   if(sliderId.length > 0){
    sliderId[currentSlider].classList.add('active');
    intervel = setInterval(nextSlider, 5000);
   }
    
}

function showSlide(index){
    if(index >= sliderId.length){
        currentSlider= 0;
    }
    else if(index < 0){
        currentSlider = sliderId.length - 1;
    }

  sliderId.forEach(slider => {
    slider.classList.remove('active');
  });
  sliderId[currentSlider].classList.add('active');
}

function previousSlider(){
   clearInterval(intervel);
   currentSlider--;
   showSlide(currentSlider);
}

function nextSlider(){
    currentSlider++
    showSlide(currentSlider);
}