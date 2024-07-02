function startGame() {
  let getTd = document.getElementsByTagName('td');
  let shapes = document.querySelector('.shapes');

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
      td.addEventListener('click', function(event) {
        event.target.classList.add(setShape(shape));
      });
    }
  
    function setShape(getValue) {
      if(getValue === 'ring') {
        shape = 'cross';
        return 'cross';
      } else {
        shape = 'ring';
        return 'ring';
      }
    };

  });

};

startGame();