'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct answer🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When their is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔NO NUMBER';
    // When player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number🎉🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


    
    // WHEN GUESS IS TOO HIGH 



  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lose';
      document.querySelector('.score').textContent = 0;
    }


    // WHEN GUESS IS TOO HIGH 


  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lose';
      document.querySelector('.score').textcontent = 0;
    }
  }
});



// WHEN GUESS IS DIFFERENT 


// else if(guess !== secretNumber){
//   if(guess>1){
//     document.querySelector('.message').textContent = guess>secretNumber ? 'Too High' : 'Too low';
//   score--;
//   document.querySelector('.score').textContent = score;
//   }else{
//     document.querySelector('.message').textContent = 'you lost the game';
//     document.querySelector('.score').textContent = 0;
//   }
// }


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'start guessing...'
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
