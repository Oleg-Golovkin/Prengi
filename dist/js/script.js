"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* После полной загрузки HTML выполняется JS */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add("mobile");
    } else {
        // код для обычных устройств
    }

    //--------------------Слайдер----------------------//

    const expertNextSlider = document.querySelector(".expert__next-wapper img"),
    expertPreviosSlider = document.querySelector(".expert__previos-wapper img"),
    expertSliders = document.querySelector(".expert__sub-wapper-sliders"),
    widthExpertSliders = window.getComputedStyle(expertSliders).width;
    
    let offset = 0;

    console.log(widthExpertSliders);
    // console.log(+Math.round(widthExpertSliders.replace(/\D/g, "")));


    // )


    expertNextSlider.addEventListener("click", (e)=> {
        // if(offset = +widthExpertSliders)
    })







});