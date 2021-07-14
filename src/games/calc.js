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

const getRound = () => {
  const operandOne = _.random(1, 100);
  const operandTwo = _.random(1, 100);
  const operation = OPERATIONS[_.random(0, 2)];
  console.log(`Question: ${operandOne} ${operation} ${operandTwo}`);

  const answer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = calcExpression(operandOne, operandTwo, operation);

  return {
    answer,
    correctAnswer,
  };
};

export default {
  getRound,
  description: 'What is the result of the expression?',
};
