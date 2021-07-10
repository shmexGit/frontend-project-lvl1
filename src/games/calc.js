import readlineSync from 'readline-sync';
import _ from 'lodash';

const OPERATIONS = ['-', '+', '*'];

function calcExpression(one, two, op) {
  switch (op) {
    case '-': return one - two;
    case '+': return one + two;
    case '*': return one * two;
    default: return 0;
  }
}

export default () => {
  const oneNumber = _.random(1, 100);
  const twoNumber = _.random(1, 100);
  const operation = OPERATIONS[_.random(0, 2)];
  console.log(`Question: ${oneNumber} ${operation} ${twoNumber}`);

  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = calcExpression(oneNumber, twoNumber, operation);
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  } else {
    console.log('Correct!');
  }

  return userAnswer === correctAnswer;
};
