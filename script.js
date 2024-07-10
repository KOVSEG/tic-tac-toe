function startGame() {
  let getTd = document.getElementsByTagName('td');
  let shapes = document.querySelector('.shapes');
  let counter = 0;
  let crossCombination = [];
  let ringCombination = [];
  let winCombinations = [
    ['00', '01', '02'], 
    ['10', '11', '12'],
    ['20', '21', '22'],
    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],
    ['00', '11', '22'],
    ['02', '11', '20']
  ];

  shapes.addEventListener('click', function getShape(event) {
    let shape;
    let sign = event.target;
    sign = sign.id;
    if(sign === 'cross-btn') {
      shape = 'cross';
    } else {
      shape = 'ring';
    }

    this.removeEventListener('click', getShape);

    for(let i = 0; i < getTd.length; i++) {
      let td = getTd[i];
      td.addEventListener('click', function setShape(event) {
        event.target.classList.add(chooseShape(shape));

        // Save the id of every turns for definite shape
        shape === 'cross' ? crossCombination.push(this.id) : ringCombination.push(this.id);

        if(true) {
        // if(crossCombination.length >= 3 || ringCombination.length >= 3) {
          checkCombinations();
        }

        this.removeEventListener('click', setShape);
      });
    }

    function chooseShape(getValue) {
      if(counter === 0) {
        shape = getValue;
        counter++;
        return shape;
      } else {
        if(getValue === 'ring') {
          return shape = 'cross';
        } else {
          return shape = 'ring';
        }
      }
    };

  });


  function checkCombinations() {
    console.log('Крестики: ' + crossCombination)
    console.log('Нолики: ' + ringCombination)
  };

};

// startGame();




let winCombinations = [
  // ['00', '01', '02'],
  // ['10', '11', '12'],
  // ['20', '21', '22'],
  ['00', '10', '20']
  // ['01', '11', '21'],
  // ['02', '12', '22'],
  // ['00', '11', '22'],
  // ['02', '11', '20']
];


// let array = ['00','10','20'];
let array = ['20','10','00'];


for(let i = 0; i < winCombinations.length; i++) {
  for(let j = 0; j < array.length; j++) {
    console.log(winCombinations[i].indexOf(array[j]));
    if(winCombinations[i].indexOf(array[j]) != -1) {
      console.log(`id: ${winCombinations[i]} has ${array[j]}`);
    }
  }
}

