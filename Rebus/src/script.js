const input = document.querySelectorAll('input');
const similarToCare = [
  ['I understand You', 'iStand'],
  ['Embrace Diversity', 'diverjozi'],
  ['Stakeholders', 'rump'],
  ['Be mindful', 'bMF'],
  ['Diverse Views', 'views'],
];
let score = 0;

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', (e) => checkUserInput(e.target));
}

function checkUserInput(e) {
  const userInput = e.value;
  const wordId = e.id;

  for (let i = 0; i < similarToCare.length; i++) {
    userInput.toLowerCase() === similarToCare[i][0].toLowerCase() &&
    wordId === similarToCare[i][1]
      ? disableAndCount(e, wordId, i)
      : null;
  }
}

function disableAndCount(e, wordId, itemIndex) {
  score += 200;
  similarToCare.splice(itemIndex, 1);
  e.disabled = true;
  document.getElementById(wordId).classList.add(`red`);
  document.getElementById('score').innerText = `${score}/1000`;
}

function onSubmit() {
  score == 1000
    ? alert('You’ve completed Care & Dignity Rebus Challenge!')
    : alert(`You scored ${score} points`);
}
