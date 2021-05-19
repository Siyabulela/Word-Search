const partnerTwoSelectOptions = document.getElementsByClassName('partners');
const winSelectOptions = document.getElementsByClassName('win');
const table = document.querySelectorAll('tr');
const arr = [[], [], [], [], []];
const partner1 = ['jayZ', 'wilbur', 'Brin', 'Coogler', 'Jobs'];
const partner2 = [
  'Senior Citizen',
  'Stephen Wozniak',
  'Larry Page',
  'Ryan Reynolds',
  'Will Smith',
  'Chadwick Boseman',
  'Marie Curie',
  'Orville Wright',
  'Beyonce',
  'Curly Hair',
];

const winwin = [
  'Penicillin',
  'Manned flight',
  'Perfect',
  'Halo',
  'Microsoft',
  'Apple',
  'Hewlett-Packard',
  'Google',
  'Black Panther',
  'Avengers',
];
const combo = [
  'Beyonce Halo',
  'Orville Wright Manned flight',
  'Larry Page Google',
  'Chadwick Boseman Black Panther',
  'Stephen Wozniak Apple',
];
let score = 0;

for (let i = 0; i < table.length; i++) {
  table[i].onchange = (e) => findSelected(e.target);
}

function findSelected(e) {
  for (let i = 0; i < partner1.length; i++) {
    if (e.parentNode.parentNode.className === partner1[i]) {
      if (e.className === 'partners') {
        arr[i][0] = e.selectedOptions[0].value;
      }
      if (e.className === 'win') {
        arr[i][1] = e.selectedOptions[0].value;
      }
      disableAndCount(i);
    }
  }
}

function disableAndCount(index) {
  for (let x = 0; x < 5; x++) {
    for (let i = 0; i < 5; i++) {
      if (arr[i].join(' ') === combo[x]) {
        arr[i][0] = '';
        score = score + 200;
        document
          .getElementsByClassName(partner1[index])[0]
          .classList.add('red');
        document.getElementById('score').innerText = `${score}/1000`;
        break;
      }
    }
  }
}

function onSubmit() {
  score >= 1000
    ? alert('You’ve completed win-win-win Challenge!')
    : alert(`You scored ${score} points`);
}

(function makeTable() {
  for (let x = 0; x < 5; x++) {
    for (let i = 0; i <= partner2.length - 1; i++) {
      let opt1 = document.createElement('option');
      let opt2 = document.createElement('option');
      opt1.value = partner2[i];
      opt1.innerHTML = partner2[i];
      opt2.value = winwin[i];
      opt2.innerHTML = winwin[i];
      partnerTwoSelectOptions[x].appendChild(opt1);
      winSelectOptions[x].appendChild(opt2);
    }
  }
})();
