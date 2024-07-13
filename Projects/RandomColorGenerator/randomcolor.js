// Generating Random color

function getRandomHexColor(){
let HEX = "0123456789ABCDEF";
let color = '#'
let hexLength = 6

for (let index = 0; index < hexLength ; index++) {
    color += HEX[Math.floor(Math.random() * 16)];
}
return color;
}

let intervalId; // Global Declare

// Starting the Back Ground Color
const startColor = ()=>{
    //Saftey check if intervalId is not null
    if(!intervalId){ 
    intervalId = setInterval(changeBgColor, 1000); 
    }
}

//Changing the Background Color
function changeBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }

// To stop Color Changing Process
const stopColor = ()=>{
    clearInterval(intervalId);
    // Make the intervalId null to reduce burden on  memory 
    intervalId = null;
}

// DOM and EventListeners

document.querySelector('#start').addEventListener('click',startColor)
document.querySelector("#stop").addEventListener('click',stopColor)

// Get Random Lightcolor 
//I needed to generate only light colours (for backgrounds), so I went with three letter (#AAA) format:

function randomLightColor(){
    let smallHex = "ABCD".split('');
    let lightColor = "#"
    let smallHexLen = 3

    for (let index = 0; index < smallHexLen; index++) {
        lightColor += smallHex[Math.floor(Math.random() * smallHex.length)];
        
    }
    return lightColor;
}

let intervalLC;

const startLightColor = ()=>{
    if(!intervalLC){
        intervalLC = setInterval(changeBgLightColor, 1000);
    }
}

function changeBgLightColor(){
    document.body.style.backgroundColor = randomLightColor();
}

const stopLightColor = ()=>{
    clearInterval(intervalLC);
    intervalLC = null;
}

document.querySelector('#lightstart').addEventListener('click',startLightColor)
document.querySelector('#lightstop').addEventListener('click',stopLightColor)



//use RGB to have 
