import { generateRandomNum, isPrime, boolToYesNo } from '../utils.js';
import brainGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const question = generateRandomNum(1, 100);
  const answer = boolToYesNo(isPrime(question));

  return [question, answer];
};

export default () => {
  brainGame(rules, generateGameData);
};
