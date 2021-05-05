let value_arr = [];
let count = 0;
let score = 0;

let position = [
  'r1c1,r2c1,r3c1,r4c1,r5c1,r6c1,r7c1,r8c1,r9c1,r10c1,r11c1', // Competitive
  'r2c11,r3c11,r4c11,r5c11,r6c11,r7c11,r8c11,r9c11,r10c11', // Inclusive
  'r5c1,r5c2,r5c3,r5c4,r5c5,r5c6,r5c7,r5c8,r5c9,r5c10', // Excellence
  'r3c3,r3c4,r3c5,r3c6,r3c7,r3c8,r3c9', // DELIVER
  'r7c3,r8c4,r9c5,r10c6,r11c7', // GOALS
];

window.onclick = (e) => {
  if (e.target.innerText.length == 1 && validCell(e.target.id, position)) {
    let id = e.target.id;
    let str_value = addOrRemoveValue(id, e);
    let foundMatch = checkWord(str_value, position);
    if (foundMatch[0]) {
      let elementFound = document.getElementById(foundMatch[1]);
      elementFound.innerHTML = `<strike>${elementFound.innerText}</strike>`;
      value_arr = [];
      count++;
      score += 400;
      document.getElementById('score').innerText = score;
    }
    if (count == 5) {
      document.getElementById('score').innerText = 2000; //?
      document.getElementById('btnSubmit').disabled = false;
    }
  }
};

function onSubmit() {
  alert(`You’ve completed the crossword!`);
}

//CHECKS THE WORD IN THE WORD SEARCH
function checkWord(values, arr_position) {
  let string_found = false;
  let index_found = 0;

  for (let r = 0; r < arr_position.length; r++) {
    if (values == arr_position[r]) {
      string_found = true;
      index_found = r;
      break;
    }
  }
  //RETURNS BOOLEAN (FOUND) AND INDEX OF THE WORD IN THE ARRAY
  return [string_found, index_found];
}

function addOrRemoveValue(value, e) {
  let found = false;
  let item_index = 0;

  // CHECKING IF ARRAY IS EMPTY, PUSHES FIRST VALUE, CHANGES COLOR
  if (value_arr.length == 0) {
    value_arr.push(value);

    e.target.style.color = 'red';
    return value;
  }

  //CHECKS IF THE VALUE IS IN THE ARRAY
  for (let i = 0; i < value_arr.length; i++) {
    if (value == value_arr[i]) {
      found = true;
      item_index = i;
    }
  }
  //IF THE VALUE IS NOT IN THE ARRAY, IT'LL PUSH() IT
  if (!found) {
    value_arr.push(value);

    e.target.style.color = 'red';
  }
  //RETURN AN ARRAY AS A STRING
  return value_arr.toString();
}

// When a user clicks on a letter that is NOT in one of the target words, IGNORE
function validCell(value, arr) {
  let arr_new = arr.toString();

  console.log([value, arr_new]);
  if (arr_new.includes(value)) {
    return true;
  }

  return false;
}
