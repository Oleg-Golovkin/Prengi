import {
    viewDevice
} from "./modules/view_device";
import {
    slider
} from "./modules/slider";

import hamburger from  "./modules/hamburger";

document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    hamburger();
    viewDevice();
    slider();
});