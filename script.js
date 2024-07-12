function startGame() {
  let getTd = document.getElementsByTagName('td');
  let shapes = document.querySelector('.shapes');
  let counter = 0;
  let attempt = 0;
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
        attempt++;

        // Save the id of every turns for definite shape
        shape === 'cross' ? crossCombination.push(this.id) : ringCombination.push(this.id);
        let shapeTranslate;
        if(shape === 'cross') {
          shapeTranslate = 'Крестики';
        } else {
          shapeTranslate = 'Нолики';
        }

        if (checkCombinations(shape)) {
          alert(`Выиграли - ${shapeTranslate}`);
        } else if (attempt === 9) {
          alert('Ничья');
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

  function checkCombinations(getShapes) {
    if(getShapes === 'cross') {
      return commonFunc(crossCombination);
    } else {
      return commonFunc(ringCombination);
    }
  };

  function commonFunc(combination) {
    for(let i = 0; i < winCombinations.length; i++) {
      let combinationMatch = 0;
      for(let j = 0; j < winCombinations[i].length; j++) {
        if(combination.indexOf(winCombinations[i][j]) != -1) {
          combinationMatch++;
          if(combinationMatch === 3) {
            return true;
          }
        }
      }
    }
    return false;
  };

};

startGame();