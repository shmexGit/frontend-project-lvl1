import readlineSync from 'readline-sync';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';

function choiseGame(count) {
  switch (count) {
    case 0: {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      return even;
    }
    case 1: {
      console.log('What is the result of the expression?');
      return calc;
    }
    case 2: {
      console.log('Find the greatest common divisor of given numbers.');
      return gcd;
    }
    default: {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      return even;
    }
  }
}

export default (countGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const game = choiseGame(countGame);

  let countSuccess = 0;
  for (let i = 0; i < 3; i += 1) {
    if (!game()) {
      break;
    }
    countSuccess += 1;
  }

  if (countSuccess === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
