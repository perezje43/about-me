var userName = prompt('Hi! What is your name?');
alert('Hi ' + userName + '! Let\'s play a guessing game about me...');

var answer1 = prompt('Am I from Seattle?').toUpperCase();

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('Correct! I am from Seattle');
} else {
  alert('No! I am from Seattle!');
}

var answer2 = prompt('Have I been skydiving before?').toUpperCase();

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('No! But I plan to!');
} else {
  alert('Correct! I am planning to!');
}

var answer3 = prompt('My favorite place I\'ve recently visted is DC?' ).toUpperCase();

if (answer3 === 'Y' || answer3 === 'YES') {
  alert('Correct! My favorite landmark was the Jefferson Memorial.');
} else {
  alert('Wrong! It was my favorite recent visit!');
}

var answer4 = prompt('My favorite burger place is In\' N\' Out?').toUpperCase();

if (answer4 === 'Y' || answer4 === 'YES') {
  alert('No! But I really want to try it!');
} else {
  alert('You\'re right! But there has never been a burger I didn\'t like!');
}

var answer5 = prompt('Have I studied abroad in Tahiti?').toUpperCase();

if (answer5 === 'Y' || answer5 === 'YES') {
  alert('Correct! I have studied abroad in Tahiti!');
} else {
  alert('No! I did study abroad in Tahiti.');
}

//User is asked to guess the age I am and summarizes how many guesses they've use.
var ageGuesses = 1;
var answer6 = parseInt(prompt('What is my age?'));

if(answer6 === 23){
  alert('Wow ' + userName + '! You\'re right, great guess!');
}else{
  while(ageGuesses <= 4 && answer6 != 21){
    if(answer6 > 23){
      answer6 = prompt('Sorry ' + userName + ', a little lower.');
      ageGuesses++;
    }else{
      answer6 = prompt('Sorry ' + userName + ', a little higher.');
      ageGuesses++;
    }
  }
}

if(ageGuesses < 4){
  alert('You used ' + ageGuesses + ' out of your 4 guesses!');
}else{
  alert('Sorry, you used all your guesses! My age is 23.');
}

//User is asked to guess a place I would like to visit and reports how many guesses they've used.
var guessNumber = 1;
var places = ['JAPAN', 'BRAZIL', 'SPAIN', 'NEW ZEALAND', 'MOROCCO', 'INDIA'];
guess = false;

var answer7 = prompt('Can you guess a country I would like to visit?').toUpperCase();

while(guess === false && guessNumber < 6){
  for(var i = 0; i < 6; i++){
    if(answer7 === places[i]){
      alert('Correct ' + userName + '! You\'ve used ' + guessNumber + ' guesses.');
      guess = true;
      break;
    }else{
    }
  }
  if(guess === false){
    answer7 = prompt('Guess Again').toUpperCase();
    guessNumber++;
  }
}

if(guess === false){
  alert('Sorry ' + userName + ', you have run out of guesses.');
}
