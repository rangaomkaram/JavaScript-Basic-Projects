
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




