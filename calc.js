
//cALCULATOR 
const displaycal = document.getElementById("displaycal");

function appendToDisplay(input){
    displaycal.value += input;
}
function clearDisplay(){
    displaycal.value = "";
}
function calculate(){
    try{
        displaycal.value = eval(displaycal.value);
    }
    catch(error){
        displaycal.value = "Error";
    }
}