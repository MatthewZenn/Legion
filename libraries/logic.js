const prefixes = ['XX_', 'Xx_', 'XX.', 'Xx.', 'The', '#1', 'THE', 'Captain', '', 'Black', 'Yellow', 'Green', 'Purple'];
const suffixes = ['_XX', '_xX', '.XX', '.xX', '69', '420', '1', '2', '_WasHere', '99', '3', '', '++', '343', '47'];
const spaces = ['', '_', '.'];
const countries = ['America', 'Germany', 'Canada'];
const styles = ['Country', 'Electronic', 'HipHop', 'Pop', 'Rock'];
const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'F#', 'Bb', 'G#', 'C#', 'Eb'];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

document.getElementById("music").addEventListener('click', () => {
  Music();
});

document.getElementById("users").addEventListener('click', () => {
  usernames();
});

document.getElementById("city").addEventListener('click', () => {
  citynames();
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

document.getElementById("random").addEventListener('click', () => {
  getRandom();
});

function citynames() {
  document.getElementById('textarea').innerHTML = '';
  for (let i = 0; i < 6; i++) {
    x = Math.random();
    if (x <= 0.5) {
      document.getElementById('textarea').innerHTML += Title.random()+Town.random()+'s'+Burrow.random()+'\n';
    }
    else document.getElementById('textarea').innerHTML += Title.random()+Town.random()+Burrow.random()+'\n';
  }
}
function Persons() {
  document.getElementById('textarea').innerHTML = '';
  for (let i = 0; i < 4; i++) {
    document.getElementById('textarea').innerHTML += 'M: '+males.random()+' '+lastnames.random()+'\n'+'F: '+females.random()+' '+lastnames.random()+'\n';
  }
}

function setting() {
  document.getElementById('textarea').innerHTML ='';
  for (let u = 0; u < 3; u++) {
    document.getElementById('textarea').innerHTML += tropes.random() + '\n';
  }
  document.getElementById('textarea').innerHTML += '\n';
  for (let j = 0; j < 4; j++) {
    document.getElementById('textarea').innerHTML += locations.random() + '\n';
  }
}

function Genere() {
  document.getElementById('textarea').innerHTML ='';
  document.getElementById('textarea').innerHTML += genres.random() + '\n + \n';
  document.getElementById('textarea').innerHTML += genres.random() + '\n\n';
  for (let k = 0; k < 3; k++) {
    document.getElementById('textarea').innerHTML += themes.random() + '\n';
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
    document.getElementById('textarea').innerHTML += "A "+brands.random()+" brand with a focus on "+motives.random()+".\n\n"
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
  document.getElementById('textarea').innerHTML += '\n';
  for (let v=0; v<5; v++) {
    document.getElementById('textarea').innerHTML += notes.random()+' ';
  }
}

function getRandom() {
  document.getElementById('textarea').innerHTML = '';
  
  document.getElementById('textarea').innerHTML += Cards.random()+"\n";
  document.getElementById('textarea').innerHTML += Math.floor((Math.random()*20)+1) +"\n";
  document.getElementById('textarea').innerHTML += ['Heads', 'Tails'].random()+"\n";
  
}