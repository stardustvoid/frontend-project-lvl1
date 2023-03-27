import brainGame from '../index.js';
import { generateRandomNum, isEven, boolToYesNo } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = generateRandomNum(1, 100);
  const answer = boolToYesNo(isEven(question));
  return [question, answer];
};

export default () => {
  brainGame(rules, generateGameData);
};
