var userName = prompt('Hi! What is your name?');
alert('Hi ' + userName + '! Let\'s play a guessing game about me...');

var totalTally = 0;

var questionsArray = ['Am I from Seattle?',
'Have I been skydiving before?',
'My favorite place I\'ve recently visted is DC?',
'My favorite burger place is In\' N\' Out?',
'Have I studied abroad in Tahiti?'
];

var correctResponse = ['Correct! I am from Seattle',
'Correct! I am planning to!',
'Correct! My favorite landmark was the Jefferson Memorial.',
'You\'re right! But there has never been a burger I didn\'t like!',
'Correct! I have studied abroad in Tahiti!'
];

var wrongResponse = ['No! I am from Seattle!',
'No! But I plan to!',
'Wrong! It was my favorite recent visit!',
'No! But I really want to try it!',
'No! I did study abroad in Tahiti.'
];

var correctAnswers = [['Y', 'YES'], ['N', 'NO'], ['Y', 'YES'], ['N', 'NO'], ['Y', 'YES']];

for (var i = 0; i < questionsArray.length; i++) {
  var answer = prompt(questionsArray[i]).toUpperCase();
  if (answer === correctAnswers[i][0] || answer === correctAnswers[i][1]) {
    alert(correctResponse[i]);
    console.log(correctResponse[i]);
    totalTally++;
  }else{
    alert(wrongResponse[i]);
  }
}

// //User is asked to guess the age I am and summarizes how many guesses they've use.
var ageGuesses = 1;
var answer6 = parseInt(prompt('What is my age?'));

if(answer6 === 23){
  alert('Wow ' + userName + '! You\'re right, great guess!');
}else{
  while(ageGuesses <= 4 && answer6 != 23){
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
  totalTally++;
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
      totalTally++;
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

alert('You got ' + totalTally + ' out of ' + ' 7.');
