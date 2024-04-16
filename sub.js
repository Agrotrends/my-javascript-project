//CHECK BOX
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const MastercardBtn = document.getElementById("MastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit4 = document.getElementById("mySubmit4");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit4.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else {
        subResult.textContent = `You are not Subscribed!`;
    } 
    if (visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`;
    }
    else if (MastercardBtn.checked){
        paymentResult.textContent = `You are paying with mastercard`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with paypal`;
    }
    else{
        paymentResult.textContent = `You must select a payment method`;
    }
    }