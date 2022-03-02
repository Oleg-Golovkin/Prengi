import {
    viewDevice
} from "./modules/view_device";
import {
    slider
} from "./modules/slider";

import hamburger from  "./modules/hamburger";
import "./modules/scroll_dynamic";
// import calculator from "./modules/calculator";
// import acordion from "./modules/acordion";


document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    hamburger();
    viewDevice();
    slider();
    // calculator();
    // acordion();
});