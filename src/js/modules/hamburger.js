const hamburgerLine = document.querySelectorAll(".hamburger__line"),
    hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    menuBackground = document.querySelector(".menu__background");

document.addEventListener("click", (e) => {

    //----------------------------active menu------------------------------------//
    function activeHamburger(selector) {
        if (e.target && e.target.matches(selector)) {
            hamburgerLine.forEach(item => {
                item.classList.add("hamburger__line_active");
            });
            menu.style.left = "0px";
            menuBackground.style.opacity = "1";
            menuBackground.style.visibility = "visible";

        }
    }
    activeHamburger(".hamburger");
    activeHamburger(".hamburger__line");

    // ----------------------------deactivation menu --------------------------//
    function deactivationHamburger(selector) {
        if (e.target.matches(selector)) {
            hamburgerLine.forEach(item => {
                item.classList.remove("hamburger__line_active");
            });
            menu.style.left = "-200px";
            menuBackground.style.opacity = "0";
            menuBackground.style.visibility = "hidden";

        }
    }
    deactivationHamburger(".menu__background");

});