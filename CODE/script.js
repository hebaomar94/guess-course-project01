'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'yay congratulation🎉🐱‍👓';
document.querySelector('.number').textContent = 22;
document.querySelector('.score').textContent = 26;
document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // guess wrong num
  if (!guess) {
    document.querySelector('.message').textContent = '🤢 no number ';
    score--;
    document.querySelector('.score').textContent = score;

    // guess R8 num
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'yay correct number🎉🎉!!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(27, 165, 101)';
    document.querySelector('.number').style.width = '30rem';
    //high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // guess  num
    else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'too hight😒' : 'too low !!!! 😒';
      }
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too hight😒';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //when u lose
      document.querySelector('body').style.backgroundColor = ' #FF0000';
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // guess low num
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low !!!! 😒';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //when u lose
      document.querySelector('body').style.backgroundColor = ' #FF0000';
      document.querySelector('.message').textContent = 'you lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = ' rgb(192, 105, 154)';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing baby🐱‍👓';
});
