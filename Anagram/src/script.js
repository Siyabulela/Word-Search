const input = document.querySelectorAll(`input`);
let score = 0;

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', (e) => checkUserInput(e.target));
}

function checkUserInput(e) {
  const userInput = e.value.toLowerCase();
  const wordId = e.id;

  if (userInput === 'dreaming' && wordId === 'mind') {
    document.getElementById('mindGear').classList.add(`red`);
    disableAndCount(e);
  } else if (userInput === 'improvement' && wordId === 'move') {
    document.getElementById('moveMePrint').classList.add(`red`);
    disableAndCount(e);
  } else if (userInput === 'innovate' && wordId === 'not') {
    document.getElementById('notInVain').classList.add(`red`);
    disableAndCount(e);
  } else if (userInput === 'inventive' && wordId === 'vet') {
    document.getElementById('vetInVine').classList.add(`red`);
    disableAndCount(e);
  } else if (userInput === 'pioneer' && wordId === 'one') {
    document.getElementById('onePier').classList.add(`red`);
    disableAndCount(e);
  }
}

function disableAndCount(e) {
  score = score + 200;
  e.disabled = true;
  document.getElementById('score').innerText = `${score}`;
}

function onSubmit() {
  score === 1000
    ? alert('You’ve completed Anagram Challenge!')
    : alert(`You scored ${score} points!`);
}
