export function slider() {
    //--------------------Слайдер----------------------//

    const expertNextSlider = document.querySelector(".expert__next-wapper img"),
        expertPreviosSlider = document.querySelector(".expert__previos-wapper img"),
        expertSubWapperSliders = document.querySelector(".expert__wapper-sliders"),
        expertSliders = document.querySelector(".expert__sliders"),
        expertSlide = document.querySelectorAll(".expert__slide"),
        width = window.getComputedStyle(expertSubWapperSliders).width;
    let offset = 0;


    expertNextSlider.addEventListener("click", () => {
        if (offset == Math.round((+width.replace(/\D/g, "") * (expertSlide.length - 1)))) {
            offset = 0
        } else {
            offset += Math.round(+width.replace(/\D/g, ""));
        }
        expertSliders.style.transform = `translateX(-${offset}px)`;
    })

    expertPreviosSlider.addEventListener("click", () => {
        if (offset == 0) {
            offset = Math.round((+width.replace(/\D/g, "") * (expertSlide.length - 1)));
        } else {
            offset -= Math.round(+width.replace(/\D/g, ""));
        }
        expertSliders.style.transform = `translateX(-${offset}px)`;
    });
}