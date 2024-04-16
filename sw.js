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
