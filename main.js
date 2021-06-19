let highScore = 0;
let currentScore = 50;
let secretNum;
let userInput = 0;
let message = {
  guess: 'Guess a Number',
  wrong: 'Wrong Guess',
  correct: 'Correct Guess',
  lose: 'Sorry Try Again',
};
let emoji = {
  guess: '🤔',
  correct: '🤓',
  wrong: '🥸',
  lose: '😭',
};

let hints = {
  select: 'Guess a number between 0 to 50',
  high: 'This number is higher',
  low: 'This number is lower',
  win: 'You win!!, Press reset to reply.',
  lose: 'You lose!!, Press reset to reply.',
  invalid: 'Invalid Number, please enter something between 1 to 50',
};

//Select the elements

let selectHighScore = document.querySelector('.high-score');
let selectCurrentScore = document.querySelector('.current-score');
let selectEmoji = document.querySelector('.game__emoji');
let selectMessage = document.querySelector('.game__result');
let selectHint = document.querySelector('.game__task');
let selectCheckBtn = document.querySelector('.check');
let selectResetBtn = document.querySelector('.reset');
let selectInput = document.querySelector('.input');

//Set the above variables as value for elements
selectHighScore.textContent = highScore;
selectCurrentScore.textContent = currentScore;
selectEmoji.textContent = emoji.guess;
selectMessage.textContent = message.guess;
selectHint.textContent = hints.select;

secretNum = Math.trunc(Math.random() * 50 + 1);

//get userInput
selectCheckBtn.addEventListener('click', () => {
  userInput = Number(selectInput.value);
  console.log(userInput);

  //Input validations
  if (userInput > 50 || userInput < 0 || isNaN(userInput)) {
    selectHint.textContent = hints.invalid;
  } else if (userInput === secretNum) {
    selectEmoji.textContent = emoji.correct;
    selectMessage.textContent = message.correct;
    selectHint.textContent = hints.win;
    selectHint.style.color = '#fff';
    if (highScore < currentScore) {
      highScore = currentScore;
      selectHighScore.textContent = highScore;
    }
    selectCheckBtn.disabled = true;
  } else if (userInput < secretNum) {
    selectEmoji.textContent = emoji.wrong;
    selectMessage.textContent = message.wrong;
    selectHint.textContent = hints.low;
    currentScore = currentScore - 5;
    selectHint.style.color = 'red';
  } else if (userInput > secretNum) {
    selectEmoji.textContent = emoji.wrong;
    selectMessage.textContent = message.wrong;
    selectHint.textContent = hints.high;
    currentScore = currentScore - 5;
    selectHint.style.color = 'red';
  }
  //Set the negative score
  selectCurrentScore.textContent = currentScore;

  if (currentScore <= 0) {
    selectEmoji.textContent = emoji.lose;
    selectMessage.textContent = message.lose;
    selectHint.textContent = hints.lose;
    selectCheckBtn.disabled = true;
  }
  selectInput.value = '';
});

//Reset the game to replay
selectResetBtn.addEventListener('click', () => {
  currentScore = 50;
  selectCurrentScore.textContent = currentScore;
  selectEmoji.textContent = emoji.guess;
  selectMessage.textContent = message.guess;
  selectHint.textContent = hints.select;
  selectInput.value = '';
  secretNum = Math.trunc(Math.random() * 50 + 1);
  selectCheckBtn.disabled = false;
  selectHint.style.color = '#fff';
  // console.log({ secretNum });
});

// console.log({ secretNum });
