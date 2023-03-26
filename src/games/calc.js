import readlineSync from 'readline-sync';

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');

  for (let round = 1; round <= 3; round += 1) {
    const num1 = generateRandomNum(1, 100);
    const num2 = generateRandomNum(1, 100);
    const operation = getMathOperator();

    const expression = `${num1} ${operation} ${num2}`;
    const answer = String(evaluateMathExpression(num1, num2, operation));

    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      if (round === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
