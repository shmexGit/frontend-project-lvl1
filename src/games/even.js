import readlineSync from 'readline-sync';
import _ from 'lodash';

const getRound = () => {
  const number = _.random(1, 100);
  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return {
    answer,
    correctAnswer
  };
};

export const game = {
  getRound,
  description: 'Answer "yes" if the number is even, otherwise answer "no".'
};
