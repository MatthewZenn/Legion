var firstname = 'john';
var lastname = 'smith';
var age = 0;
var country = 'asd';
var gender = '';
var p = 0;
var place = 'Hotel';
var genere = 'FPS';
var themel = 'Apocalypse';
var trope = 'scifi'
const prefixes = ['XX_', 'Xx_', 'XX.', 'Xx.', 'The', '#1', 'THE', 'Captain', '', 'Black', 'Yellow', 'Green', 'Purple'];
const suffixes = ['_XX', '_xX', '.XX', '.xX', '69', '420', '1', '2', '_WasHere', '99', '3', '', '++', '343', '47'];
const spaces = ['', '_', '.'];
const countries = ['America', 'Germany', 'Canada'];
const styles = ['Country', 'Electronic', 'HipHop', 'Pop', 'Rock'];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

document.getElementById("music").addEventListener('click', () => {
  Music();
});

document.getElementById("users").addEventListener('click', () => {
  usernames();
});

document.getElementById("names").addEventListener('click', () => {
  Persons();
});

document.getElementById("settings").addEventListener('click', () => {
  setting();
});

document.getElementById("genre").addEventListener('click', () => {
  Genere();
});

document.getElementById("logo").addEventListener('click', () => {
  Logo();
});

function Persons() {
  document.getElementById('textarea').innerHTML = '';
  for (let i = 0; i < 5; i++) {
    p = Math.random();
    if (p <= 0.5) {
      firstname = 'M: '+males_us.random();
    }
    else firstname = 'F: '+females_us.random();
    lastname = lastnames.random();
    document.getElementById('textarea').innerHTML += firstname + ' ' + lastname + '\n';
  }
}

function setting() {
  document.getElementById('textarea').innerHTML ='';
  trope = tropes.random();
  document.getElementById('textarea').innerHTML += trope + '\n + \n';
  trope = tropes.random();
  document.getElementById('textarea').innerHTML += trope + '\n\n';
  for (let j = 0; j < 3; j++) {
    place = locations.random();
    document.getElementById('textarea').innerHTML += place + '\n';
  }
}

function Genere() {
  document.getElementById('textarea').innerHTML ='';
  genere = genres.random();
  document.getElementById('textarea').innerHTML += genere + '\n + \n';
  genere = genres.random();
  document.getElementById('textarea').innerHTML += genere + '\n\n';
  for (let k = 0; k < 3; k++) {
    themel = themes.random();
    document.getElementById('textarea').innerHTML += themel + '\n';
  }
}

function usernames() {
  document.getElementById('textarea').innerHTML = '';

  for (let i = 0; i < 5; i++) {
    var first = gamertags.random();

    var re = first;
    var res = re;
    x = Math.random();
    if (x <= 0.3) {
      res = re.replace(/i/gi, '1');
      re = res;
    }
    x = Math.random();
    if (x <= 0.3) {
      res = re.replace(/o/gi, '0');
      re = res;
    }
    x = Math.random();
    if (x <= 0.3) {
      res = re.replace(/e/gi, '3');
    }
    first = res;
  
    var last = gamertags.random();
  
    var re = last;
    var res = re
    x = Math.random();
    if (x <= 0.3) {
      res = re.replace(/i/gi, '1');
      re = res;
    }
    x = Math.random();
    if (x <= 0.3) {
      res = re.replace(/o/gi, '0');
      re = res;
    }
    x = Math.random();
    if (x <= 0.3) {
      res = re.replace(/e/gi, '3');
    }
    last = res;
  
    var space = spaces.random();
    var prefix = prefixes.random();
    var suffix = suffixes.random();
    var tag = prefix + first + space + last + suffix;
  
  
    document.getElementById('textarea').innerHTML += tag + '\n';
  }
}

function Logo() {
  document.getElementById('textarea').innerHTML = '';
  for (let l = 0; l < 3; l++) {
    var brand = brands.random();
    var style = motives.random();
    document.getElementById('textarea').innerHTML += "A "+brand+" brand with a focus on "+style+".\n\n"
  }
}

function Music() {
  document.getElementById('textarea').innerHTML = '';
  for (let z=0; z<5; z++) {
    var muse = styles.random();
    switch (muse) {
      case 'Country':
        document.getElementById('textarea').innerHTML += Country.random()+'\n';
        break;
      case 'Rock':
        document.getElementById('textarea').innerHTML += Rock.random()+'\n';
        break;
      case 'HipHop':
        document.getElementById('textarea').innerHTML += HipHop.random()+'\n';
        break;
      case 'Pop':
        document.getElementById('textarea').innerHTML += Pop.random()+'\n';
        break;
      default:
        document.getElementById('textarea').innerHTML += Electronic.random()+'\n';
        break;
    }
  }
}