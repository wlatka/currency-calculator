{
    const welcome = () => {
        console.log("Hello to all developers!");
    };

    const amountEuro = () => {
        const euroElement = document.querySelector(".js-euro");
        const euro = euroElement.value;
    };

    const resultText = (euro) => {
        const plnElement = document.querySelector(".js-pln");
        const usdElement = document.querySelector(".js-usd");
        const gbpElement = document.querySelector(".js-gbp");

        const pln = 4.5577 * euro;
        const usd = 0.83 * euro;
        const gbp = 0.87 * euro;

        plnElement.innerText = `${pln} zł`;
        usdElement.innerText = `${usd} $`;
        gbpElement.innerText = `${gbp} £`;
       
    };

    const init = (pln) => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", resultText);

    };
    init();
    welcome();

};