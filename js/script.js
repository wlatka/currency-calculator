console.log("Hello to all developers!");

let formElement = document.querySelector(".js-form");
let euroElement = document.querySelector(".js-euro");
let plnElement = document.querySelector(".js-pln");
let usdElement = document.querySelector(".js-usd");
let gbpElement = document.querySelector(".js-gbp");

formElement.addEventListener("input", () => {
    let euro = euroElement.value;
    let pln = 4.5577 * euro;
    let usd = 0.83 * euro;
    let gbp = 0.87 * euro;

    plnElement.innerText = `${pln.toFixed(2)} zł`;
    usdElement.innerText = `${usd.toFixed(2)} $`;
    gbpElement.innerText = `${gbp.toFixed(2)} £`;
});