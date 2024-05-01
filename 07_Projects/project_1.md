# project related to dom 

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rjpkqj?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# project one solution 

``` javascript 
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

const randColor = function(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `${r} ${g} ${b}`
}

buttons.forEach(function(button){
 button.addEventListener('click', function(event){
  //  if(event.target.id === 'grey'){
  //    body.style.backgroundColor = event.target.id;
  //  }
  //  if(event.target.id === 'white'){
  //    body.style.backgroundColor = event.target.id;
  //  }
  //  if(event.target.id === 'blue'){
  //    body.style.backgroundColor = event.target.id;
  //  }
  //  if(event.target.id === 'yellow'){
  //    body.style.backgroundColor = event.target.id;
  //  }


   switch(event.target.id){
     case ('grey'):
       body.style.backgroundColor = event.target.id;
    
    case('white'):
    body.style.backgroundColor = event.target.id;
     
    case('blue'):
    body.style.backgroundColor = event.target.id;
     
    case('yellow'):
    body.style.backgroundColor = event.target.id;
     
   }
 })
})



```
## project two solution 

```javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a valid Height ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    //show the result
    results.innerHTML = `<span> </span>`;

    if(bmi < 18.6){
      results.innerHTML = `<span> Under Weight </span>`;
    }
    else if(bmi > 18.6 && bmi <= 24.9) {

      results.innerHTML = `<span> ${bmi} : Normal </span>`;
    }
    else
    results.innerHTML = `<span> ${bmi} : Over Weight </span>`;
  }
});

```
## project three solution
``` javascript 

const time = document.getElementById('clock');
console.log(time);

//IMP
// setInterval(function(){
//   let date = new Date();
//   // console.log(date.toLocaleTimeString());
//   time.innerText = date.toLocaleTimeString()
// }, 1000);

setInterval(() => {
  let date = new Date();
  time.innerText = date.toLocaleTimeString()
} , 1000)

```

## project four solution


```javascript 
//  const random = Math.floor(Math.random() * 100 + 1);

let random = parseInt(Math.random() * 100 + 1);
console.log(random);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // guess between 1 - 100
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numOfGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You guessed it right `);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is Too low`);
  } else if (guess > random) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numOfGuess++;
  remaining.innerHTML = `${11 - numOfGuess} `;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (event) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
