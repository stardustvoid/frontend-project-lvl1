import readlineSync from 'readline-sync';

const rounds = 3;

export default (rules, getGameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);
  console.log(rules);

  for (let round = 1; round <= rounds; round += 1) {
    const [question, answer] = getGameData();
    const stringAnswer = String(answer);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === stringAnswer) {
      console.log('Correct!');
      if (round === rounds) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${stringAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
