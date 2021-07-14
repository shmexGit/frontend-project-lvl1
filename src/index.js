import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export const run = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const { description, getRound } = game;
  console.log(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { answer, correctAnswer } = getRound();
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i === ROUNDS_COUNT - 1) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
