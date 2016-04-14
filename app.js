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
//
// for (var i = 0; i < questionsArray.length; i++) {
//   var answer = prompt(questionsArray[i]).toUpperCase();
//   if (answer === 'YES' || answer === 'Y') {
//     alert(correctResponse[i]);
//     totalTally++;
//   }else{
//     alert(wrongResponse[i]);
//   }
// }

function questionOne() {
  var answer1 = prompt(questionsArray[0]).toUpperCase();
  if (answer1 === 'Y' || answer1 === 'YES') {
    alert(correctResponse[0]);
    console.log(correctResponse[0]);
    totalTally++;
  } else {
    alert(wrongResponse[0]);
    console.log(wrongResponse[0]);
  }
}

function questionTwo() {
  var answer2 = prompt(questionsArray[1]).toUpperCase();
  if (answer2 === 'N' || answer2 === 'NO') {
    alert(correctResponse[1]);
    console.log(correctResponse[1]);
  } else {
    alert(wrongResponse[1]);
    console.log(wrongResponse[1]);
    totalTally++;
  }
}

function questionThree() {
  var answer3 = prompt(questionsArray[2]).toUpperCase();
  if (answer3 === 'Y' || answer3 === 'YES') {
    alert(correctResponse[2]);
    console.log(correctResponse[2]);
    totalTally++;
  } else {
    alert(wrongResponse[2]);
    console.log(wrongResponse[2]);
  }
}

function questionFour() {
  var answer4 = prompt(questionsArray[3]).toUpperCase();
  if (answer4 === 'N' || answer4 === 'NO') {
    alert(correctResponse[3]);
    console.log(correctResponse[3]);
  } else {
    alert(wrongResponse[3]);
    console.log(wrongResponse[3]);
    totalTally++;
  }
}

function questionFive() {
  var answer5 = prompt(questionsArray[4]).toUpperCase();
  if (answer5 === 'Y' || answer5 === 'YES') {
    alert(correctResponse[4]);
    console.log(correctResponse[4]);
    totalTally++;
  } else {
    alert(wrongResponse[4]);
    console.log(wrongResponse[4]);
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();

//User is asked to guess the age I am and summarizes how many guesses they've use.
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
