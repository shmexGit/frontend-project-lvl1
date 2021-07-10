import readlineSync from 'readline-sync';
import _ from 'lodash';

export default () => {
  const randomNumber = _.random(1, 100);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  } else {
    console.log('Correct!');
  }

  return userAnswer === correctAnswer;
};
