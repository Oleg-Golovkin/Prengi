const calculator = () => {
    const
        chooses = document.querySelectorAll(".calculating__choose"),
        chooseMedium = document.querySelector(".calculating__choose_medium"),
        result = document.querySelector(".calculating__result");

    let num,
        sex,
        height,
        weight,
        age,
        ratio;

    const formula = () => {
        console.log(sex);
        console.log(weight);
        console.log(height);
        console.log(age);
        if (!sex || !weight || !height || !age) {
            result.textContent = "Выберете пол, вес, рост и возраст";
        } else if (sex == "man") {
            num = (10 * (+weight) + (6, 25 * (+height)) - (5 * (+age)) - 160)
            if(ratio) {
                num = num - (+ratio);
            }
        } else if (sex == "woman") {
            num = (10 * (+weight) + (6, 25 * (+height)) - (5 * (+age)) + 5)
            if(ratio) {
                num = num - (+ratio);
            }
        }
        result.textContent = `${num}`;
    };
    formula();



    const getStatick = (attribute) => {
        chooses.forEach(choose => {
            choose.addEventListener("click", (e) => {
                if (e.target && e.target.matches(attribute) && e.target.closest("#gender")) {
                    sex = e.target.getAttribute("id");
                    formula();
                }
                if (e.target && e.target.matches(attribute) && e.target.closest(".calculating__choose_big")) {
                    ratio = e.target.getAttribute("data-ratio");
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