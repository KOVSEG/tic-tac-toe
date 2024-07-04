function startGame() {
  let getTd = document.getElementsByTagName('td');
  let shapes = document.querySelector('.shapes');
  let counter = 0;

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

};

startGame();