let count = 0, count2 = 0, count3 = 0;
window.onclick = (e) => {
  if (e.target.nodeName === 'INPUT') {
    this.addEventListener('input', (e) => checkUserInput(e.target));
  }
};

function checkUserInput(e) {
  const userInput = e.value.toLowerCase();
  const wordId = e.id;

  if (userInput === 'dreaming' && wordId === 'mind') {
    document.getElementById('mindGear').classList.add(`red`);
    count = 1;
    disableAndCount(e);
  } else if (userInput === 'improvement' && wordId === 'move') {
    document.getElementById('moveMePrint').classList.add(`red`);
    count = 2;
    disableAndCount(e);
  } else if (userInput === 'innovate' && wordId === 'not') {
    document.getElementById('notInVain').classList.add(`red`);
    count = 3;
    disableAndCount(e);
  } else if (userInput === 'inventive' && wordId === 'vet') {
    document.getElementById('vetInVine').classList.add(`red`);
    count = 4;
    disableAndCount(e);
  } else if (userInput === 'pioneer' && wordId === 'one') {
    document.getElementById('onePier').classList.add(`red`);
    count = 5;
    disableAndCount(e);
  }
}

function disableAndCount(e) {
  count2 = count + 0;
  count3 = count2 + count
  e.disabled = true;
  count3 === 10 ? (document.getElementById('btnSubmit').disabled = false) : null;
}

function onSubmit() {
  alert('You’ve completed Anagram Challenge!');
}
