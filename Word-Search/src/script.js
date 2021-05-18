const table = document.querySelectorAll('table tbody tr td')
let valueArray = [],
  countWords = 0,
  score = 0;

const letterPosition = [
  'r1c1,r2c1,r3c1,r4c1,r5c1,r6c1,r7c1,r8c1,r9c1,r10c1,r11c1', // Competitive
  'r2c11,r3c11,r4c11,r5c11,r6c11,r7c11,r8c11,r9c11,r10c11', // Inclusive
  'r5c1,r5c2,r5c3,r5c4,r5c5,r5c6,r5c7,r5c8,r5c9,r5c10', // Excellence
  'r3c3,r3c4,r3c5,r3c6,r3c7,r3c8,r3c9', // DELIVER
  'r7c3,r8c4,r9c5,r10c6,r11c7', // GOALS
];

for (let i = 0; i < table.length; i++) {
  table[i].onclick = e =>{
    if(onlyLetterOfTargetWords(e.target.id, letterPosition)){
      const id = e.target.id,
        stringValue = addOrRemoveValue(id, e),
        foundMatch = checkWordInWordSearch(stringValue, letterPosition);
  
      if (foundMatch[0]) {
        const elementFound = document.getElementById(foundMatch[1]);
        elementFound.innerHTML = `<strike>${elementFound.innerText}</strike>`;
        letterPosition[foundMatch[1]] = '';
        valueArray = [];
        countWords++;
        score += 200;
        document.getElementById('score').innerText = `${score}/1000`;
      }
      if (countWords == 5) { 
        document.getElementById('btnSubmit').disabled = false;
      }
    }
  }
}

function onSubmit() {
  alert('You’ve completed the crossword!');
}
function checkWordInWordSearch(stringValue, letterPosition) {
  let stringFound = false,
    indexFound = 0,
    sortedValue = '';

  if (typeof stringValue == 'object') {
    sortedValue = stringValue.sort();
  }
  for (let i = 0; i < letterPosition.length; i++) {
    let positionSort = letterPosition[i].toString().split(',').sort();
    if (sortedValue.length == positionSort.length) {
      if (sortedValue.join('') == positionSort.join('')) {
        stringFound = true;
        indexFound = i;
        break;
      }
    }
  }
  return [stringFound, indexFound];
}
function addOrRemoveValue(id, e) {
  let found = false,
    itemIndex = 0;
  if (valueArray.length == 0) {
    valueArray.push(id);
    e.target.style.color = 'red';
    return id;
  }
  for (let i = 0; i < valueArray.length; i++) {
    if (id == valueArray[i]) {
      found = true;
      itemIndex = i;
      valueArray.splice(itemIndex, 1);
      e.target.style.color = 'black';
    }
  }
  if (!found) {
    valueArray.push(id);
    e.target.style.color = 'red';
  }
  return valueArray;
} 
function onlyLetterOfTargetWords(id, letterPosition) {
  let newArray = letterPosition.toString();
  if (newArray.includes(id)) {
    return true;
  }
  return false;
}
