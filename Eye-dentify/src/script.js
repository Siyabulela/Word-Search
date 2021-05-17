const heros = [
  ['Nelson Mandela', 'apartheid'],
  ['Albert Einstein', 'light'],
  ['Rosa Parkes', 'busSeat'],
  ['Marie Curie', 'polonium'],
  ['Martin Luther King', 'promiseLand'],
];
let score = 0;
window.onclick = (e) => {
  if (e.target.nodeName === 'INPUT') {
    this.addEventListener('input', (e) => checkUserInput(e.target));
  }
};

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
  heros.splice(itemIndex, 1);
  e.disabled = true;
  let totalScore = calculateScore();
  document.getElementById(wordId).classList.add(`red`);
  document.getElementById('score').innerText = `${totalScore}/1000`;
}

function calculateScore() {
  if (heros.length == 4) return (score = 200);
  if (heros.length == 3) return (score = 400);
  if (heros.length == 2) return (score = 600);
  if (heros.length == 1) return (score = 800);
  if (heros.length == 0) return (score = 1000);
}

function onSubmit() {
  score >= 1000
    ? alert('You’ve completed EYE-Dentify Challenge!')
    : alert(`You scored ${score} points`);
}
