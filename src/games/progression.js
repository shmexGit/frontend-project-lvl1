import readlineSync from 'readline-sync';
import _ from 'lodash';

function calcStringProgression(size, first, next, empty) {
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

export default () => {
  const size = _.random(4, 9);
  const first = _.random(0, 20);
  const next = _.random(2, 10);
  const empty = _.random(0, size);
  const [str, correctAnswer] = calcStringProgression(size, first, next, empty);
  console.log(`Question: ${str}`);

  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  } else {
    console.log('Correct!');
  }

  return userAnswer === correctAnswer;
};
