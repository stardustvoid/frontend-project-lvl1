import brainGame from '../index.js';
import { generateRandomNum, findGCD } from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const num1 = generateRandomNum(1, 100);
  const num2 = generateRandomNum(1, 100);
  const question = `${num1} ${num2}`;
  const answer = findGCD(num1, num2);

  return [question, answer];
};

export default () => {
  brainGame(rules, generateGameData);
};
