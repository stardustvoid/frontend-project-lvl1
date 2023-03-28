import { generateRandomNum, generateProgression, hideElementInProgression } from '../utils.js';
import brainGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateGameData = () => {
  const progressionStart = generateRandomNum(1, 100);
  const progressionDifference = generateRandomNum(1, 20);
  const progressionLength = generateRandomNum(5, 10);

  const progression = generateProgression(
    progressionStart,
    progressionDifference,
    // eslint-disable-next-line comma-dangle
    progressionLength
  );

  const [question, answer] = hideElementInProgression(progression);

  return [question, answer];
};

export default () => {
  brainGame(rules, generateGameData);
};
