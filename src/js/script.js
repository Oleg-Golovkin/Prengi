import {
    viewDevice
} from "./modules/view_device";
import {
    slider
} from "./modules/slider";

import hamburger from  "./modules/hamburger";
import "./modules/scroll_dynamic";
import calculator from "./modules/calculator";


document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    hamburger();
    viewDevice();
    slider();
    calculator();
});