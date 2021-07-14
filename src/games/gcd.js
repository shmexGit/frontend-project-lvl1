import readlineSync from 'readline-sync';
import _ from 'lodash';

function calcDivisors(num) {
  const results = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      results.push(i);
    }
  }
  return results;
}

const getRound = () => {
  const oneNumber = _.random(1, 100);
  const twoNumber = _.random(1, 100);
  console.log(`Question: ${oneNumber} ${twoNumber}`);

  const answer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = _.max(_.intersection(calcDivisors(oneNumber), calcDivisors(twoNumber)));

  return {
    answer,
    correctAnswer
  };
};

export const game = {
  getRound,
  description: 'Find the greatest common divisor of given numbers.'
};
