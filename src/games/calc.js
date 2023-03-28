import brainGame from '../index.js';
import { generateRandomNum, getMathOperator, evaluateMathExpression } from '../utils.js';

const rules = 'What is the result of the expression?';

const generateGameData = () => {
  const num1 = generateRandomNum(1, 100);
  const num2 = generateRandomNum(1, 100);
  const operation = getMathOperator();

  const question = `${num1} ${operation} ${num2}`;
  const answer = evaluateMathExpression(num1, num2, operation);

  return [question, answer];
};

export default () => {
  brainGame(rules, generateGameData);
};
