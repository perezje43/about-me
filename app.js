alert('Hi! Let\'s play a guessing game about me...');

var answer1 = prompt('Am I from Seattle?').toUpperCase();

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('Correct!');
} else {
  alert('No!');
}

var answer2 = prompt('Have I been skydiving before?').toUpperCase();

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('No! But I plan to!');
} else {
  alert('Correct!');
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
  alert('Correct!');
} else {
  alert('No! I did study abroad in Tahiti.');
}
