const hamburger = () => {
    const hamburgerLine = document.querySelectorAll(".hamburger__line"),
        menu = document.querySelector(".menu"),
        menuBackground = document.querySelector(".menu__background");

    document.addEventListener("click", (e) => {

        //----------------------------active menu------------------------------------//

        if (e.target && (e.target.matches(".hamburger") || e.target.matches(".hamburger__line"))) {
            hamburgerLine.forEach(item => {
                item.classList.add("hamburger__line_active");
            });
            menu.style.left = "0px";
            menuBackground.style.opacity = "1";
            menuBackground.style.visibility = "visible";
 
        }

        // ----------------------------deactivation menu --------------------------//

        if (e.target == menuBackground) {
            hamburgerLine.forEach(item => {
                item.classList.remove("hamburger__line_active");
            });
            menu.style.left = "-200px";
            menuBackground.style.opacity = "0";
            menuBackground.style.visibility = "hidden";

        }
    });
};

export default hamburger;