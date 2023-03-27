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

// eslint-disable-next-line object-curly-newline
export { generateRandomNum, isEven, boolToYesNo, getMathOperator, evaluateMathExpression };
