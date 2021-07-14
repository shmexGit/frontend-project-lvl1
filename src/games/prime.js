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

const getRound = () => {
  const number = _.random(1, 100);
  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    answer,
    correctAnswer,
  };
};

export default {
  getRound,
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};
