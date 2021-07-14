import readlineSync from 'readline-sync';
import _ from 'lodash';

function calcProgression(size, first, next, empty) {
  const results = [];
  let count = first;
  let answer = 0;
  for (let i = 0; i <= size; i += 1) {
    if (i === empty) {
      results.push('..');
      answer = count;
    } else {
      results.push(count);
    }
    count += next;
  }
  return [_.join(results, ' '), answer];
}

const getRound = () => {
  const size = _.random(4, 9);
  const first = _.random(0, 20);
  const next = _.random(2, 10);
  const empty = _.random(0, size);
  const [str, correctAnswer] = calcProgression(size, first, next, empty);
  console.log(`Question: ${str}`);

  const answer = Number(readlineSync.question('Your answer: '));
  return {
    answer,
    correctAnswer
  };
};

export const game = {
  getRound,
  description: 'What number is missing in the progression?'
};
