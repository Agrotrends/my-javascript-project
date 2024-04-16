//COUNTER PROGRAM: Creating a reset button game
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const resetRBtn = document.getElementById("resetRBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function (){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function (){
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick = function (){
  count = 0;
 //  count= Math.floor(Math.random() * 6 ) + 1;
    countlabel.textContent = count;
}
resetRBtn.onclick = function (){
    //count = 0;
     count= Math.floor(Math.random() * 6 ) + 1;
      countlabel.textContent = count;
  }

// creating random numbers
let randomNum1 = Math.floor(Math.random() * 6 ) +1;
console.log(randomNum1);