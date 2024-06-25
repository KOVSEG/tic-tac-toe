let getTd = document.getElementsByTagName('td');

for(let i = 0; i < getTd.length; i++) {
  let td = getTd[i];
  td.addEventListener('click', function(event) {
    console.log(event.target)
  });
}