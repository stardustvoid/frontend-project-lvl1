import readlineSync from 'readline-sync';

const generateRandomNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const isEven = (num) => num % 2 === 0;

const boolToYesNo = (bool) => (bool ? 'yes' : 'no');

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 1; round <= 3; round += 1) {
    const num = generateRandomNum(1, 100);
    const answer = boolToYesNo(isEven(num));

    console.log(`Question: ${num}`);

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
