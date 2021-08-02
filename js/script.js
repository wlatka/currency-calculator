{
    const welcome = () => {
        console.log("Hello to all developers!");
    };


    const resultText = () => {

        const euroElement = document.querySelector(".js-euro");
        const euro = euroElement.value;

        const plnElement = document.querySelector(".js-pln");
        const usdElement = document.querySelector(".js-usd");
        const gbpElement = document.querySelector(".js-gbp");

        const pln = 4.5577 * euro;
        const usd = 0.83 * euro;
        const gbp = 0.87 * euro;

        plnElement.innerText = `${pln.toFixed(2)} zł`;
        usdElement.innerText = `${usd.toFixed(2)} $`;
        gbpElement.innerText = `${gbp.toFixed(2)} £`;

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", resultText);
        resultText();
        welcome();
    };
    init();
};