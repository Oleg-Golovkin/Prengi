const select = document.querySelectorAll("select"),
    totalPrice = document.querySelector(".total__price");

let num,
    resSizes,
    resOptions;

select.forEach(item => {
    item.addEventListener("input", (e) => {
        if (e.target && e.target.matches("#calc")) {
            resSizes = e.target.value;
        }
        if (e.target && e.target.matches("#options")) {
            resOptions = e.target.value;
        }
        num = (+resSizes) * (+resOptions);

        if (!resSizes || !resOptions) {
            totalPrice.innerHTML = "";
        } else {
            totalPrice.innerHTML = `${num} рублей`;
        }
    });
});
