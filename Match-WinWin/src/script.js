const selectPartner = document.getElementsByClassName('partners');
const selectWin = document.getElementsByClassName('win');
const tableRow = document.querySelectorAll(`select`)
const table = document.querySelectorAll('tr')

const partner2 = [
  'Stephen Wozniak',
  'Senior Citizen',
  'Larry Page',
  'Ryan Reynolds',
  'Will Smith',
  'Chadwick Boseman',
  'Marie Curie ',
  'Orville Wright ',
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

(function makeTable() {
  for (let x = 0; x < 5; x++) {
    for (let i = 0; i <= partner2.length - 1; i++) {
      let opt1 = document.createElement('option');
      let opt2 = document.createElement('option');
      opt1.value = partner2[i];
      opt1.innerHTML = partner2[i];
      opt2.value = winwin[i];
      opt2.innerHTML = winwin[i];
      selectPartner[x].appendChild(opt1);
      selectWin[x].appendChild(opt2);
    }
  }
})();

for (let i = 0; i < table.length; i++) {
    table[i].onchange = e => findSelected(e.target);
}

function findSelected(e) {
    const userPartner = e//.selectedOptions[0].value
    // const userWin = e.selectedOptions[1].value
    // const parent = e.parentNode.parentNode.className
    // console.log(parent, userPartner, userWin);
    console.log(this);
    // if(parent.className === 'jayZ'){
    //     console.log('HEY Z');
    // }
}

