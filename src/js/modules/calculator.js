const calculator = () => {
    const
        chooses = document.querySelectorAll(".calculating__choose"),
        chooseMedium = document.querySelector(".calculating__choose_medium"),
        chooseItems = document.querySelectorAll(".calculating__choose-item"),
        result = document.querySelector(".calculating__result");
    const numInputs = chooseMedium.querySelectorAll("input");
    numInputs.forEach(numInput => {
        numInput.addEventListener("input", () => {
            numInput.value = numInput.value.replace(/\D/, "");
        });
    });

    let num,
        sex = "woman",
        height,
        weight,
        age,
        ratio = "1.375";

    const formula = () => {
        if (!sex || !weight || !height || !age) {
            result.textContent = "Выберете пол, вес, рост и возраст";
            numInputs.forEach(input => {
                input.style.border = "red solid 1px";
            });
            return;
        } else {
            numInputs.forEach(input => {
                input.style.border = "none";
            });
        }
        if (sex == "man") {
            num = (10 * (+weight) + (6, 25 * (+height)) - (5 * (+age)) - 160)
            result.textContent = `${num}`;
            if (ratio) {
                num = num - (+ratio);
                result.textContent = `${num}`;
            }
        } else {
            num = (10 * (+weight) + (6, 25 * (+height)) - (5 * (+age)) + 5)
            result.textContent = `${num}`;
            if (ratio) {
                num = num - (+ratio);
                result.textContent = `${num}`;
            }
        }

    };
    formula();



    const getStatick = (attribute) => {
        chooses.forEach(choose => {
            choose.addEventListener("click", (e) => {
                if (e.target && e.target.matches(attribute) && e.target.closest("#gender")) {
                    sex = e.target.getAttribute("id");
                    chooseItems.forEach(chooseItem => {
                        if (chooseItem.closest("#gender")) {
                            chooseItem.classList.remove("calculating__choose-item_active");
                            e.target.classList.add("calculating__choose-item_active");
                        }
                    });
                    formula();
                }
                if (e.target && e.target.matches(attribute) && e.target.closest(".calculating__choose_big")) {
                    console.log("asfda");
                    ratio = e.target.getAttribute("data-ratio");
                    chooseItems.forEach(chooseItem => {
                        if (chooseItem.closest(".calculating__choose_big")) {
                            chooseItem.classList.remove("calculating__choose-item_active");
                            e.target.classList.add("calculating__choose-item_active");
                        }
                    });
                    formula();
                }
            });
        });
    };
    getStatick("#woman");
    getStatick("#man");
    getStatick("#low");
    getStatick("#small");
    getStatick("#medium");
    getStatick("#high");

    const getDinamick = () => {
        chooseMedium.addEventListener("input", (e) => {
            switch (e.target.getAttribute("id")) {

                case "height":
                    height = e.target.value;
                    break;
                case "weight":
                    weight = e.target.value;
                    break;
                case "age":
                    age = e.target.value;
                    break;
            }
            formula();
        });
    };

    getDinamick();

};

export default calculator;