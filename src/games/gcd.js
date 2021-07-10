import readlineSync from 'readline-sync';
import _ from 'lodash';

function calcDivisors(num) {
  const results = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      results.push(i);
    }
  }
  return results;
}

export default () => {
  const oneNumber = _.random(1, 100);
  const twoNumber = _.random(1, 100);
  console.log(`Question: ${oneNumber} ${twoNumber}`);

  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = _.max( _.intersection(calcDivisors(oneNumber), calcDivisors(twoNumber)) );
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  } else {
    console.log('Correct!');
  }

  return userAnswer === correctAnswer;
};
