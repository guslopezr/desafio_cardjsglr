let inputquantity = document.getElementById("cant1");
let price = document.getElementById("price").textContent;
let calculate = document.getElementById("calculatetotal");
let totalquantity = 0;
let finalprice = 0;
let pricetopay = document.getElementById("pricetopay");
let colorpicker = document.querySelector("#colorselector");

inputquantity.addEventListener("change", (event) => {
    totalquantity = event.target.value;
    console.log(event.target.value);

})

calculate.addEventListener("click", () => {
    finalprice = totalquantity * Number(price);
    pricetopay.textContent = finalprice;
    inputquantity = document.querySelector('#cant1');
    selectedguitars = document.querySelector('#cant2');
    selectedguitars.innerHTML = inputquantity.value + ' guitarra(s)';

})

function changeColor(event) {
    var color = event.value;
    document.getElementsByClassName('finalcolor')[0].style.backgroundColor = color;
}