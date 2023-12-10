var p = 0;
var firstname = 'john';

document.getElementById("names").addEventListener('click', () => {
  Persons();
});

function Persons() {
  document.getElementById('textarea').innerHTML = '';

  for (let i = 0; i < 5; i++) {
    p = Math.random();

    if (p <= 0.5) {
      firstname = males_us[Math.floor(Math.random()*males_us.length)];
    }
    else firstname = females_us[Math.floor(Math.random()*females_us.length)];

    lastname = lastnames[Math.floor(Math.random()*lastnames.length)];
    document.getElementById('textarea').innerHTML += firstname + ' ' + lastname + '\n';
  }
}