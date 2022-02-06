const hamburgerLine = document.querySelectorAll(".hamburger__line"),  
hamburger = document.querySelector(".hamburger");

document.addEventListener("click", (e) => {
   
//----------------------------active menu------------------------------------//
function activeHamburger(selector) {
    if (e.target && e.target.matches(selector)) {
        console.log('ok');
        hamburgerLine.forEach(item => {
            item.classList.add("hamburger__line_active"); 
        });                    
    }
}
activeHamburger(".hamburger");
activeHamburger(".hamburger__line");

//----------------------------deactivation menu --------------------------//
// if (e.target.matches(".close") || e.target.matches(".menu-lateral__blackout")) {
//     hamburgerLine.forEach(item => {
//         item.classList.remove("hamburger__line_active");
//     });
//     document.querySelector(".menu-lateral").classList.remove("menu-lateral__active");
//     hide(".menu-lateral__blackout");
// }
});
