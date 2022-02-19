let myBar = document.getElementById("myBar"),
dataMyBar = document.querySelector("[data-myBar]");
dataMyBar.style.fontSize = "50px";

window.addEventListener("scroll", () => {
    let scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    myBar.style.width = scrolled + "%";
    dataMyBar.innerText = `${Math.round(scrolled)} %`;
    
});

