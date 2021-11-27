"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* После полной загрузки HTML выполняется JS */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add("mobile");
    } else {
        // код для обычных устройств
    }

  





});