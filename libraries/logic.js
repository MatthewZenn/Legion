var firstname = 'john';
var lastname = 'smith';
var age = 0;
var country = 'asd';
var gender = '';
var p = 0;
var place = 'Hotel';
var genere = 'FPS';
var themel = 'Apocalypse';
const prefixes = ['XX_', 'Xx_', 'XX.', 'Xx.', 'The', '#1', 'THE', 'Captain', ''];
const suffixes = ['_XX', '_xX', '.XX', '.xX', '69', '420', '1', '2', '_WasHere', '99', '3', '', '++'];
const spaces = ['', '_', '.', '-'];
const countries = ['America', 'Germany', 'Canada']

document.getElementById("profile").addEventListener('click', () => {
  identity();
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

function identity() {
  document.getElementById('textarea').innerHTML = '';
  age = Math.floor(Math.random() * (60 - 18 + 1) + 18);
  p = Math.random();

  if(p >= 0.5) {
    gender = 'Male';
  }
  else {
    gender = 'Female';
  }
  country = countries[Math.floor(Math.random()*countries.length)];
  if(country == 'America') {
    usnames();
  }
  else if(country == 'Germany') {
    germannames();
  }
  else {
    canadanames();
  }
  lastname = lastnames[Math.floor(Math.random()*lastnames.length)];
  document.getElementById('textarea').innerHTML = firstname + ' ' + lastname + '\n' + 'gender: ' + gender + '\n' + 'birth: ' + country + '\n' + 'age: ' + age;
}

function usnames() {
  if(p >= 0.5) {
    firstname = males_us[Math.floor(Math.random()*males_us.length)];
  }
  else {
    firstname = females_us[Math.floor(Math.random()*females_us.length)];
  }
}

function germannames() {
  if(p >= 0.5) {
    firstname = males_german[Math.floor(Math.random()*males_german.length)];
  }
  else {
    firstname = females_german[Math.floor(Math.random()*females_german.length)];
  }
}

function canadanames() {
  if(p >= 0.5) {
    firstname = males_canada[Math.floor(Math.random()*males_canada.length)];
  }
  else {
    firstname = females_canada[Math.floor(Math.random()*females_canada.length)];
  }
}

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

function setting() {
  document.getElementById('textarea').innerHTML ='';
  for (let j = 0; j < 3; j++) {
    place = locations[Math.floor(Math.random()*locations.length)];
    document.getElementById('textarea').innerHTML += place + '\n';
  }
  document.getElementById('textarea').innerHTML += '\n';
  for (let j = 0; j < 3; j++) {
    place = stories[Math.floor(Math.random()*stories.length)];
    document.getElementById('textarea').innerHTML += place + '\n';
  }
}

function Genere() {
  document.getElementById('textarea').innerHTML ='';
  genre = genres[Math.floor(Math.random()*genres.length)];
  document.getElementById('textarea').innerHTML += genre + '\n + \n';
  genre = genres[Math.floor(Math.random()*genres.length)];
  document.getElementById('textarea').innerHTML += genre + '\n\n';
  for (let k = 0; k < 3; k++) {
    themel = themes[Math.floor(Math.random()*themes.length)];
    document.getElementById('textarea').innerHTML += themel + '\n';
  }
}

function usernames() {
  document.getElementById('textarea').innerHTML = '';
  for (let i = 0; i < 5; i++) {
    var first = gamertags[Math.floor(Math.random()*gamertags.length)];
    var last = gamertags[Math.floor(Math.random()*gamertags.length)];
    var space = spaces[Math.floor(Math.random()*spaces.length)];
    var prefix = prefixes[Math.floor(Math.random()*prefixes.length)];
    var suffix = suffixes[Math.floor(Math.random()*suffixes.length)];
    var tag = prefix + first + space + last + suffix;

    var re = tag
    x = Math.random();
    if (x <= 0.3) {
      tag = re.replace(/i/gi, '1');
      re = tag;
    }
    x = Math.random();
    if (x <= 0.3) {
      tag = re.replace(/O/gi, '0');
      re = tag;
    }
    x = Math.random();
    if (x <= 0.3) {
      tag = re.replace(/o/gi, '0');
      re = tag;
    }
    x = Math.random();
    if (x <= 0.3) {
      tag = re.replace(/E/gi, '3');
      re = tag;
    }
    x = Math.random();
    if (x <= 0.3) {
      tag = re.replace(/e/gi, '3');
    }
    document.getElementById('textarea').innerHTML += tag + '\n';
  }
}