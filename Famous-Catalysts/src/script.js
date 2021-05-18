const input = document.querySelectorAll('input');
const heros = [
  ['Nelson Mandela', 'apartheid'],
  ['Albert Einstein', 'light'],
  ['Rosa Parkes', 'busSeat'],
  ['Marie Curie', 'polonium'],
  ['Martin Luther King', 'promiseLand'],
];
let score = 0;
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', (e) => checkUserInput(e.target));
}

function checkUserInput(e) {
  const userInput = e.value;
  const wordId = e.id;

  for (let i = 0; i < heros.length; i++) {
    userInput.toLowerCase() === heros[i][0].toLowerCase() &&
    wordId === heros[i][1]
      ? disableAndCount(e, wordId, i)
      : null;
  }
}

function disableAndCount(e, wordId, itemIndex) {
  score += 200;
  e.disabled = true;
  document.getElementById(wordId).classList.add(`red`);
  document.getElementById('score').innerText = `${score}/1000`;
}

function onSubmit() {
  score >= 1000
    ? alert('You’ve completed EYE-Dentify Challenge!')
    : alert(`You scored ${score} points`);
}
