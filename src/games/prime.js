import readlineSync from 'readline-sync';
import _ from 'lodash';

function isPrime(num) {
  const results = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      results.push(i);
    }
  }
  return results.length === 2;
}

export default () => {
  const randomNumber = _.random(1, 100);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  } else {
    console.log('Correct!');
  }

  return userAnswer === correctAnswer;
};
