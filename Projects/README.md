# JavaScript_Basic_Projects
## Revising the Projects

# Source Code for javascript
## Manipulate the tags/elements in HTML and CSS using JavaScript
# Project 1

```javascript
console.log("Color changing of six Blocks");

/*
Yellow,  White,  Orange,  Red,  Green,   Blue
*/

const colorButtons = document.querySelectorAll('.button');
const body = document.querySelector('body');


colorButtons.forEach((button) =>{
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target)
        switch (event.target.id) {
            case 'red':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'orange':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;               
                break;
            case 'green':
                body.style.backgroundColor = event.target.id;               
                break;

            default:
                break;
        }
    })
})

```

# Project 2 
## BMI Calculator 

## what is BMI Calculator ?

Calculate Your Body Mass Index
Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.

Enter your weight and height using standard or metric measures.
"Compute BMI" and your BMI will appear below.

## BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater

# source code

```javascript

console.log("BMI Calculator")

const form = document.querySelector('form');

form.addEventListener('submit',function(ev){
    ev.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height < 0 || height === '' || isNaN(height)) {
        results.innerHTML = `! Please give a valid Height in Centimeters ${height}.` ;   
    }else if (weight < 0 || weight === '' || isNaN(weight)) {
        results.innerHTML = `! Please give a valid weight in KiloGrams ${weight}.` ;   
    }else {
       const bmi =  (weight/((height*height)/10000)).toFixed(2)
       //show the result
       if(bmi < 18.5){
        results.innerHTML = `<span>your are underweight and value is ${bmi}</span>`;
       }

       else if(bmi >=18.5 && bmi <= 24.9){
        results.innerHTML = `<span>your are Normal or Healthy and value is ${bmi}</span>`
       }
       else if (bmi >= 25.0 && bmi <= 29.9){
        results.innerHTML = `<span>your are Overweight and value is ${bmi}</span>`;
       }else if (bmi >= 30){
        results.innerHTML = `<span>your are Obese and value is ${bmi}</span>`;
       }

    }

    
});

```

# Project -3
## Digital Clock

### Source Code of JS

```javascript

console.log("Digital Clock");

const clock = document.querySelector('#digiclock');
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    
},1000)


```

# Project -4
## Guess the Number and Win! the Game

### Source Code of JS

```javaScript 

//Get the random number at intially

let randomNumber = parseInt(Math.random() * 100 + 1);


//Get the userInput,results,submit from forms

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const preGuessSlot = document.querySelector('.preguess');
const highOrLow = document.querySelector('.highORlow');
const remainSlot = document.querySelector('.finalResult');
const startOver = document.querySelector('.resultParas');

//creating an element
const p = document.createElement('p');

//To store the previous guess in the array.
let preGuess = []

//Set the attempts intially at 1 
let numGuess = 1
//Final attempts upto 10
let finalAttempts = 11

//set the player 
let playGame = true


if(playGame){
    submit.addEventListener('click',function(ev){
        ev.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuessNum(guess)

    })
}



//Validate the input fields in the form in the range 1-100

function validateGuessNum(guess){
    if(isNaN(guess)){
        alert("! Please enter the valid number")
    }else if(guess < 1){
        alert("! Please enter more than one ")
    }else if(guess > 100){
        alert("! please enter the number in range 1 to 100 only")
    }else {
        preGuess.push(guess)
        if (numGuess === 11) {
            guessNum(guess)
            displayMessage(`Game Over,randomnumber was ${randomNumber}.`)
            endGame();
        }else{
            guessNum(guess);
            checkGuessNum(guess);

        }
        
    }
}


//Check the validation and take the input 

function checkGuessNum(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed the correct Number`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Your Number is TOO LOWWWW !`);
    }else if(guess > randomNumber){
        displayMessage(`Your Number is TOO HIGHHHHHHH!`);
    }
}


//Display the guess number

function guessNum(guess){
    userInput.value = '' // clean the input 
    preGuessSlot.innerHTML += `${guess}, `;      // adding the preguess number 
    numGuess++;
    remainSlot.innerHTML = `${finalAttempts - numGuess}`;
}
//Display the message to the player

function displayMessage(msg){
    highOrLow.innerHTML = `<h2>${msg}</h2>`

}

//After the finish attempts , player can reset the game to play again.



//Player can quit the game or end the game

function endGame(){
    userInput.value = '' ; 
    userInput.setAttribute('disabled','')  ; //setattribute is key-value pair 
    //Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.
    //start button
    p.classList.add('button');
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(ev){
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    preGuessSlot.innerHTML = '' ;
    remainSlot.innerHTML = `${finalAttempts - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
   });

}


```

# Project 5
## Random Color Generator 
### Having BackGroung Light and Random

### Source Code of JS

```javaScript
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


```