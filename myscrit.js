/*
console.log("Hello");
window.alert("welcome to Ade-Daniel Website");
document.getElementById("MyP1").textContent= "With this website i want to learn javascript.";
 let age = 28;
 let price = 30.45;
 let gpa = 'Upper-Cla ss';
 let firstname = 'Olatunji';

 //method 1
 console.log('you are ' + age + 'years old');
  //method 2
 console.log(`you are ${age} years old`);
 console.log('the price is ' + price + 'naira');
 console.log(`my first name is ${firstname}`);

 //boolean usually true or false
 let Father = true;
 console.log(`${firstname} is a father: ${Father}`); 

//How to accept user input
// 1. EASY WAY = Window prompt
// 2. PROFFESSIONAL WAY = HTML Textbox

//lets start with window prompt
//username = window.prompt('Enter Your username');
//password = window.prompt('Enter Your password');

// 2. PROFFESSIONAL WAY = HTML Textbox
let username; 
document.getElementById("mySubmit").onclick = function(){
username = document.getElementById("myUser").value;
document.getElementById("MyP1").textContent = `Hello ${username}`;
}

// ++--------------------------------------------------
// Coversion of data types    
let age = window.prompt("How old are You?");
age = Number(age);
age+=1;
age*=2;
//here below i choose to replace it with my paragraph
document.getElementById("MyP1").textContent = (`your age is ${age}`);
console.log(age);

// ++-------------------------------------++
// CONST: its a variable that cant be changed.

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;
console.log(circumference);

// const B

//const PI = 3.14159;
//let radius;
//let circumference

document.getElementById("mySubmit2").onclick = function(){
    radius = document.getElementById("myRadius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myR").textContent = circumference + "cm"
}

*/
// ++-------------------------------------++
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

// ++-------------------------------------++
//COUNTER PROGRAM: Creating a simple ludo game
const player1Btn = document.getElementById("player1Btn");
const restartgBtn = document.getElementById("restartgBtn");
const player2Btn = document.getElementById("player2Btn");
let randomNum2 = Math.floor(Math.random() * 6 ) +1;
console.log(randomNum2);


player1Btn.onclick = function (){
     count= Math.floor(Math.random() * 6 ) + 1;
      countlabel2.textContent = count;
  }
  restartgBtn.onclick = function(){
      count = 0;
      countlabel2.textContent = count;
  }
  player2Btn.onclick = function (){

      count= Math.floor(Math.random() * 6 ) + 1;
      countlabel2.textContent =count;
  }
// ++-------------------------------------++
//COUNTER PROGRAM: lets roll three dice at a go
  
const playerABtn = document.getElementById("playerABtn");
const playerAlabel1 = document.getElementById("playerAlabel1");
const playerAlabel2 = document.getElementById("playerAlabel2");
const playerAlabel3 = document.getElementById("playerAlabel3");
const min = 1;
const max = 6;
let randomNumP1 ;
let randomNumP2 ;
let randomNumP3 ;

playerABtn.onclick = function() {
    randomNumP1 = Math.floor( Math.random() * max) + min;
    randomNumP2 = Math.floor( Math.random() * max) + min;
    randomNumP3 = Math.floor( Math.random() * max) + min;
     playerAlabel1.textContent = randomNumP1;
     playerAlabel2.textContent = randomNumP2;
     playerAlabel3.textContent = randomNumP3;
}
let timeReach = "1:16:00";
console.log(timeReach);

// ++-------------------------------------++
//IF STATEMENTS
let age = 18;
if(age >= 18){
    console.log(`You are old enough to enter this site`);
}
else{
    console.log(`You are not old enough to enter this site`);
}
//using boolean variable
let isNurse = true;
if(isNurse){
    console.log("You are a Nurse");
}
else {
    console.log("You are a not Nurse");   
}

// Nested if statement 
let agedri = 25;
let hasLicense = false;

if(agedri >= 18){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license");
    }
    else{
        console.log("You do not have a llicense yet.");
    }
}
else{
    console.log("You must be 18+ to have a license");
}

//ElseIf Statement
let agenew = 901;
if(agenew >= 100){
    console.log("Your are too old to vote");
}
else if(agenew >= 18){
     console.log("You can Proceed to vote");
}
else if(agenew < 0){
    console.log("Your age cant go below 1");
}
else if(agenew == 0){
    console.log("Your cant proceed, you were just born");
}
else{
    console.log("You cant proceed to vote");
}


let timeReach2 = "1:30:00";
console.log(timeReach2);

//ElseIf Statement: reality example
 const myText =  document.getElementById("myText");
 const mySubmit3 =  document.getElementById("mySubmit3");
 const resultElement =  document.getElementById("resultElement");
 let agep;

mySubmit3 .onclick = function(){
   agep = myText.value;
   agep = Number(agep);
  if(agep >= 100){
    resultElement.textContent =`Your are too old to vote`;
}
else if(agep >= 18){
    resultElement.textContent = `You can Proceed to vote`;
}
else if(agep < 0){
    resultElement.textContent = `Your age cant go below 1`;
}
else if(agep == 0){
    resultElement.textContent = `Your cant proceed, you were just born`;
}
else{
    resultElement.textContent =`You cant proceed to vote`;
}
}

// ++-------------------------------------++
//CHECK BOX EXAMPLES
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
// ++-------------------------------------++
//Ternary Operator: it is a shortcut to if and else statements
let ageo = 1
let message = ageo >= 18 ? `You are an Adult` : `You are not an Adult`;
console.log(message);

let time = 10;
let greeting = time < 12 ? `Good morning` : `Good afternoon`;
console.log(greeting); 

let isDoctor = false;
let job = isDoctor ? `You are a Doctor` : `You are not a Doctor`;
console.log(job)

let purcaseAmount = 20;
let discount = purcaseAmount >= 100? 10/100:0; 
console.log(`Your total payment is ${purcaseAmount - purcaseAmount * discount}`);

// ++-------------------------------------++
//SWITCH = Can be an efficient relacement to many else if statements
let day = 58;

switch(day){
    case 1: console.log("it is Monday"); break;
    case 2: console.log("it is Tuesday"); break;
    case 3: console.log("it is Wednesday"); break;
    case 4: console.log("it is Thursday"); break;
    case 5: console.log("it is Friday"); break;
    case 6: console.log("it is Saturday"); break;
    case 7: console.log("it is Sunday"); break;
    default: console.log(`${day} is not a day`);
}

//another example using boolean
let testScore = 49;
let letterGrade;

switch(true){
    case testScore >= 70:  letterGrade = "A: First Class"; break;
    case testScore >= 60:  letterGrade = "B: Second Class Upper"; break;
    case testScore >= 50:  letterGrade = "B: Second Class Lower"; break;
    case testScore >= 40:  letterGrade = "C: Third Class"; break;
}
console.log(letterGrade);

// ++-------------------------------------++
//String methods ALLOWS YOU TO MAANIPULATE AND WORK WITH TEXTS / STRINGS

//replacing characters  
let phoneNumber = "070-3967-772-0"
phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);

//Pad start method
phoneNumber = phoneNumber.padStart(20, "+");
console.log(phoneNumber);

//Pad end method
let phoneNumber2 = "070-3967-772-0"
phoneNumber2 = phoneNumber2.padEnd(20, "+");
console.log(phoneNumber2);


let timeReach3 = "2:03:00";
console.log(timeReach3);


/*
// ++-------------------------------------++
//String  Slicing : 
 const fullName2 = 'Olatunji Adebanjo';
let firstname = fullName2.slice(0, 8);
console.log(firstname);
let surname = fullName2.slice(9, 17);
console.log(surname);

//Character Slicing
let firstChar = fullName2.slice(0, 1);
console.log(firstChar);
let LastChar = fullName2.slice(-2);
console.log(LastChar);

//Getting a text after space 
let firstname3 = fullName2.slice(0, fullName2.indexOf(" "));
console.log(firstname3);
let surname3 = fullName2.slice(fullName2.indexOf(" "));
console.log(surname3);

const email = 'adebanjo.olatunji@gmail.com'; 
let username2 = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1);
console.log(username2);
console.log(extension);


// ++-------------------------------------++
//logical operator
//both condition must be met
const temp = 93;
if(temp > 0 && temp <= 30) { console.log("The weather is good");}
else { console.log("The weather is bad");}

//one of the condition must be met
const temp2 = 2;
if(temp2 > 0 || temp2 >= 30) { console.log("The weather is good");}
else { console.log("The weather is bad");}

//strict equality operator
const PI = 3.14;
if(PI !== 3.14){console.log("that is not a pi");}
else
{console.log('it iss a PI');}

// while loop initiate some codd if condition is met
//example: execute this code if one of the condition is true
let username3 = "";
while(username3 === ""){ username3 = window.prompt(`Enter your username1:`);}
console.log(username3);

//example: execute this code if none of the condition is true
let username4 = "";
while(username4 === "" || username4 === null){ username4 = window.prompt(`Enter your username2:`);}
console.log(username4);

//another while loop example
let Loggedin = false;
let username5;
let password5;
while(!Loggedin){
    // username5 = window.prompt(`Enter your username3:`);
   //  password5 = window.prompt(`Enter your password3:`);
    
     if (username5 === "Ade-daniel" && password5 === "Adebanjo@1"){
         Loggedin = true; 
         console.log("You are logged in");
     }
    else{
        console.log("You enterred incorrect details");
    }
    }

    //another way to do while loop example
let Loggedin2 = false;
let username6;
let password6;

do{
    username6 = window.prompt(`Enter your username4:`);
    //password6 = window.prompt(`Enter your password4:`);
   
    if (username6 === "Ade-daniel2" && password6 === "Adebanjo@2"){
        Loggedin = true; 
        console.log("You are logged in");
    }
   else{
       console.log("You enterred incorrect details");
   }
   }
   while(!Loggedin)

   for(let i = 0; i<= 2; i++) {console.log("Hello, welcome");}
   for(let i = 0; i<= 5; i++) {console.log(i);}
   for(let i = 2; i<= 21; i+=3) {console.log(i);}
   for(let i = 15; i> 1; i+=3) {console.log(i);}
   */
   for(let i = 0; i<= 2; i++) {console.log("Hello, welcome");}
   for(let i = 0; i<= 5; i++) {console.log(i);}
   for(let i = 2; i<= 21; i+=3) {console.log(i);}

   //to skip a particular iteration, use continue key word
   for(let c = 30; c<= 40; c+=2)
   if(c == 34){
       continue;
     }
     else{console.log(c);} 
//to break out from the loop
for(let c = 30; c<= 40; c+=2)
if(c == 36){
    break;
  }
  else{console.log(c);}

  // ++-------------------------------------++
//Number guessing game
const minNum = 50;
const maxNum = 200;
const answer = Math.floor(Math.random()*(maxNum-minNum +1))+ minNum;
console.log(answer);

//Number guessing game example
// check 2:45 for it.

  // ++-------------------------------------++
  // function name calling out
  //declaring the function below
  function happyBirthday() {
console.log(`Happy Birthday to you`); 
console.log(`Happy Birthday to you`);
console.log(`Happy Birthday to you Angel-Oluwadarasimi`);
console.log(`Happy Birthday to you`);     
  }
 //calling the function out by its name
  happyBirthday();
  //function can be call by its name severally as shown below
  happyBirthday();
  happyBirthday();

  //we can send additional information to the function as shown below
  function happyBirthday(celebrantName, celAge) {
    console.log(`Happy Birthday to you ${celebrantName}`); 
    console.log(`${celebrantName} you are ${celAge} years old today`);     
 } happyBirthday("Daniel", 30);
 //you can also change the information added
 happyBirthday("Angel", "One");

 //another function example using number
 function add(x, y, z) {
      return x + y + z;
 }
console.log(add(3,6, 7));

//function minus
function minus(x, y, z) {
    return x - y - z;
}
console.log(minus(53,6, 7));

//function multiply
function multiply(x, y, z) {
    return x * y * z;
}
console.log(multiply(3,6,7));

//function event lets determine if a number is an even number
function isEven(number) {
    if( number % 2 === 0){
        return true + ` Number ${number} is an even number;` 
    }
    else{
        return false +  `Number ${number} is an odd number`;
    }
}
console.log(isEven(23));
console.log(isEven(48));

//Lets use the shortcut of if else statement to call the function
function isEven2(number){
    return number % 2 === 0 ? true + ` Number ${number} is an even number;`: false + `Number ${number} is an odd number`;
} 
console.log(isEven2(56));       
console.log(isEven2(89));

//let use email
function isValidEmail(email) {
    return email.includes("@") ? true + ` it is a valid email` : false + ` it is not a valid email`;
}
console.log(isValidEmail('adebanj@gmail.com'));
console.log(isValidEmail('adebanjgmail.com'));

 //Temperature Conversion Program
 const textBox = document.getElementById("textBox");
 const toFahrenheit = document.getElementById("toFahrenheit");
 const toCelsius = document.getElementById("toCelsius");
 const tempResult = document.getElementById("tempResult");
 
 let temp;
 
 function convert() {
     if(toFahrenheit.checked){temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
   onclick("tempBtn") = tempResult.textContent = temp + "F";  
    }
     else if (toCelsius.checked){}
     else{tempResult.textContent = "Select a unit";}
 }

//timeReach =  3:20

 // ++-------------------------------------++
  // array @ 3:26 

   // ++-------------------------------------++
  //spread Operator ... for unpackig of elements or array 3:33
let numbers = [1, 2, 3, 4, 5];
let maxNums = Math.max(...numbers);
let minNums = Math.min(...numbers);
console.log(maxNums);
console.log(minNums);

//spread opearator using strigs
 let myName = "Ade-Daniel";
 let letters = [...myName].join(" ");
 console.log(letters);

 //spread opearator can also be used to combined two arrays and also add more elements
 let fruits = [ 'Mango', 'Orange', 'pear'];
 let vegetables = ['Ewedu', 'Ugu', 'celery'];
 let foods = [...fruits, ...vegetables, 'egg', 'milk'];
 console.log(foods);

  //rest parameter opposite of spread element to bundle elements to become array
function openFridge(...foods2) {
    console.log(foods2);
}
const foodA = 'pizza';
const foodB = 'Bread';
const foodC = 'Tomato';
openFridge(foodA, foodB, foodC);


 // ++-------------------------------------++
  //lets create a ludo game @ 3:45
  function rollDice(){
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for(let i = 0; i< numOfDice; i++){
      const value = Math.floor(Math.random() *6) +1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="dice ${value}">`);
  }
  diceResult.textContent = `dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join("");
}

 // ++-------------------------------------++
  //Password Generator @ 3:59

//Certainly! Below is a simple JavaScript code snippet for generating a random password:javascript
// Generate a random password
/*
function displayGeneratedPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Example usage: Generate a password with 12 characters
const newPassword = displayGeneratedPassword(12);
//console.log(`Generated password: ${newPassword}`);
*/

   function generatePassword(length) {
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }
            return password;
        }

        function displayGeneratedPassword() {
            const newPassword = generatePassword(12);
            document.getElementById("password-output").textContent = `Generated password: ${newPassword}`;
        }

//You can adjust the `length` parameter to specify how long you want the password to be.
// Feel free to customize the `charset` to include any additional characters you'd like
// in your passwords.

 // ++-------------------------------------++
  //Call Back @ 4:16
  // FOREach 

  let numberz = [1, 2, 3, 4, 5];
  numberz.forEach(double);
  numberz.forEach(display);
  function double(element, index, array){
      array[index] = element *2;
  } 
  function triple(element, index, array){
    array[index] = element *3;
} 
function square(element, index, array){
    array[index] = Math.pow(element, 2);
} 
  function display(element){
      console.log(element);
  }

   // ++-------------------------------------++
  //.map @ 4:29

   // ++-------------------------------------++
  //filter method @ 4:32

  let numberzz = [1, 2, 3, 4, 5, 6, 7];
  let evenNumz = numberzz.filter(isEven);
  let oddNumz = numberzz.filter(isOdd);
  console.log(evenNumz);
  console.log(oddNumz)

  function isEven(element){
      return element % 2 === 0;
  }

  function isOdd(element){
    return element % 2 !== 0;
}

 // ++-------------------------------------++
  //.reduce() reduce the elements of an array to a single value 4:40

 // ++-------------------------------------++
  // arrow functions  good for functions you only want to use once.
  setTimeout( () => console.log("Hello"), 4000); 

   // ++-------------------------------------++
  //OBJECTS @ 5:01

   // ++-------------------------------------++
  //THIS @5:07
  const person1 = {
      myName: "Dan",
       favFood: "Amala",
        sayHello: function(){
          console.log(`Hi! I am ${this.myName}`);}
        }
          person1.sayHello();

 // ++-------------------------------------++
  // Constructor @5:13
  function car(make, model, year, color){
      this.make = make,
      this.model = model,
      this.year = year,
      this.color = color 
  } 
const car1 = new car('Nissan', 'Ultima', 2000, "Brown" );
const car2 = new car('Toyota', 'Suv', 2020, "Whnite" );
const car3 = new car('Benz', 'Jeep', 2025, "Black" );
  
 
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2 .make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

// ++-------------------------------------++
  //Class @5:18
  // class is used to simlify constructor
  // formula for class

  class product{
      constructor(name, price){
          this.name = name;
           this.price = price;
       }
      displayProduct(){
          console.log(`Product: ${this.name}`);
          console.log(`Price: $${this.price}`);
      }
      //lets calculate sales tax
      calculateTotal(salesTax){
          return this.price + (this.price * salesTax);
      }
  }
const salesTax = 0.05;
const product1 = new product("Shirt", 19.99);
const product2 = new product("Cassava", 110.50);
const product3 = new product("Laptop", 3500.70);
product1.displayProduct();
product2.displayProduct();
product3.displayProduct(); 

const total = product1.calculateTotal(salesTax);
console.log(`Total Price (with tax): $${total.toFixed(2)}`);

 // ++-------------------------------------++
  // static @5:35

   // ++-------------------------------------++
  // super keyword @5:39     
  
  // ++-------------------------------------++
  // Destructurihng @6:01

  // ++-------------------------------------++
  // nested ogbject @6:12

  // ++-------------------------------------++
  // working with array object @6:21

  // ++-------------------------------------++
  // sort @6:29

  // ++-------------------------------------++
  // shuffle @6:37

  // ++-------------------------------------++
  // date object @6:41

  // ++-------------------------------------++
  // closure @6:50

  // ++-------------------------------------++
  // setTimeout 7:04

  // ++-------------------------------------++
  //clock @ 7:07
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridien = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeSrings = `${hours}:${minutes}:${seconds} ${meridien}`;
    document.getElementById("clock").textContent = timeSrings;
}
updateClock();
//To let the clock update every seconds, lets set intervals below
setInterval(updateClock, 1000);

// ++-------------------------------------++
  //Stop watch
const displayw = document.getElementById("displayw");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRuning = false;



function startw(){
    if(!isRuning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRuning = true;
    }
    
}

function stopw(){
    if(isRuning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRuning = false;
    }
}

function resetw(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRuning = false;
    displayw.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    
    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);
    
    displayw.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}

// ++-------------------------------------++
  // Module import javascript @ 7:36

// ++-------------------------------------++
  // synchronous and asynchronous code

// ++-------------------------------------++
  //Error @7:45

/*
// This function clears all the values
function clearScreen() {
document.getElementById("result").value="";
}

// This function displays the values
function display(value) {
document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
let result = document.getElementById("result");
try {
result.value = eval(result.value);
} catch (error) {
result.value = 'Error';
}
}
*/
// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

//cALCULATOR 2
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

//DOM 8:09
console.dir(document);

// Element Selector 8:16

//Dom navigation @ 8:32

// Changing HTML Elements using javaascript   

//++-----------------------
// Event Listener @ 9:04

const myBox = document.getElementById("myBox");


myBox.addEventListener("click", event =>{
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "Welcome 🙌";
})

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Go ahead, Click ME 👌";})
    
myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "Come Back to Click Meee 😊";
}) 


const myButtonE = document.getElementById("myButtonE")

myButtonE.addEventListener("click", event =>{
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "Welcome 🙌";
})

myButtonE.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Go ahead, Click ME 👌";})
    
myButtonE.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "Come Back to Click Meee 😊";
}) 
//Key events in Javascript @ 9:15

//+-------------------+
// Hide Elements in javascript

//+-------------------+
//Node list 

//+-------------------+
// Promise keyword @10:50

//+-------------------+
//JSON Javascript object notation @10:57

//+-------------------+
// Fetch @ 11> 03

//+-------------------+
// FETCH WEATHER @ 11:27
