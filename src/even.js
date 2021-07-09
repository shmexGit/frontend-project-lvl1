import readlineSync from 'readline-sync';

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function game() {
  const randomNumber = randomInteger(1, 100);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  } else {
    console.log('Correct!');
  }

  return userAnswer === correctAnswer;
}

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
