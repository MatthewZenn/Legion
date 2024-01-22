var firstname = 'john';
var lastname = 'smith';
var age = 0;
var country = 'asd';
var gender = '';
var p = 0;
var place = 'Hotel';

var countries = ['America', 'India', 'Germany', 'Canada']

document.getElementById("profile").addEventListener('click', () => {
  identity();
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
  else if(country == 'India') {
    indianames();
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

function indianames() {
  if(p >= 0.5) {
    firstname = males_india[Math.floor(Math.random()*males_india.length)];
  }
  else {
    firstname = females_india[Math.floor(Math.random()*females_india.length)];
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

document.getElementById("names").addEventListener('click', () => {
  Persons();
});

document.getElementById("settings").addEventListener('click', () => {
  setting();
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

function setting() {
  document.getElementById('textarea').innerHTML ='';

  for (let j = 0; j < 3; j++) {
    place = locations[Math.floor(Math.random()*locations.length)];
    document.getElementById('textarea').innerHTML += place + '\n';
  }
}