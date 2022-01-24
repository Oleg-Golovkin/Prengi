"use strict";

import {viewDevice} from "./modules/view_device";
import {slider} from "./modules/slider";

document.addEventListener("DOMContentLoaded", () => {
    /* После полной загрузки HTML выполняется JS */
    viewDevice();
    slider();
});