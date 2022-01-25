"use strict";

import {
    viewDevice
} from "./modules/view_device";
import {
    slider
} from "./modules/slider";
import {
    simpleAdaptiveSliderMin
} from "./modules/simple-adaptive-slider.min";




document.addEventListener("DOMContentLoaded", () => {
    viewDevice();
    slider();
    simpleAdaptiveSliderMin();
});