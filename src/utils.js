const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isEven = (num) => num % 2 === 0;

const boolToYesNo = (bool) => (bool ? 'yes' : 'no');

const getMathOperator = () => {
  const mathOperators = ['+', '-', '*'];
  const operatorsCount = mathOperators.length;
  const operatorIndex = generateRandomNum(0, operatorsCount - 1);

  return mathOperators[operatorIndex];
};

const evaluateMathExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a % b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return b;
};

const generateProgression = (start, difference, length) => {
  let progression = [start];
  let lastElement = start;

  for (let i = 1; i < length; i += 1) {
    const nextElement = lastElement + difference;
    progression = [...progression, nextElement];
    lastElement = nextElement;
  }

  return progression;
};

const hideElementInProgression = (progression) => {
  const progressionLength = progression.length;
  const elementIndex = generateRandomNum(0, progressionLength - 1);
  const hiddenElement = progression.splice(elementIndex, 1, '..');
  const progressionString = progression.join(' ');

  return [progressionString, hiddenElement];
};

export {
  generateRandomNum,
  isEven,
  boolToYesNo,
  getMathOperator,
  evaluateMathExpression,
  findGCD,
  generateProgression,
  hideElementInProgression,
};
