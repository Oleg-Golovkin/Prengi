const calculator = () => {
    const
        chooses = document.querySelectorAll(".calculating__choose"),
        chooseMedium = document.querySelector(".calculating__choose_medium"),
        chooseItems = document.querySelectorAll(".calculating__choose-item"),
        result = document.querySelector(".calculating__result");

    let num,
        sex = "woman",
        height,
        weight,
        age,
        ratio = "1.375";

    const formula = () => {
        if (!sex || !weight || !height || !age) {
            result.textContent = "______________";
            return;
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
                        chooseItem.classList.remove("calculating__choose-item_active");
                    });
                    document.querySelector(attribute).classList.add("calculating__choose-item_active");
                    e.target.classList.add("calculating__choose-item_active");
                    formula();
                }
                if (e.target && e.target.matches(attribute) && e.target.closest(".calculating__choose_big")) {
                    ratio = e.target.getAttribute("data-ratio");
                    chooseItems.forEach(chooseItem => {
                        chooseItem.classList.remove("calculating__choose-item_active");
                    });
                    e.target.classList.add("calculating__choose-item_active");
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