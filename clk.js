// Event Listener
const myBox = document.getElementById("myBox");


myBox.addEventListener("click", event =>{
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "Welcome 🙌";
})

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Go ahead, Click ME 👌";})
    
myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Come Back to Click Me 😊";
}) 