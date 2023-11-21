const prefixes = ['XX_', 'Xx_', 'XX.', 'Xx.', 'The', '#1', 'THE', 'Captain', ''];
const suffixes = ['_XX', '_xX', '.XX', '.xX', '69', '420', '1', '2', '_WasHere', '99', ''];
const names = ['Noob', 'Slayer', 'Master', 'Unicorn', 'Demon', 'Hammer', 'Gamer', 'Killer', 'Sith', 'Jedi', 'Cowboy', 'Boi', 'Cow', 'Pantz', 'Mushroom', 'Potato', 'Monster', 'Goddess', 'Thunder', 'Mario', 'Brian', 'Luigi', 'Dino', 'Hunter', 'Sonic', 'Shadow', 'Clown', 'Knuckles', 'Girl', 'Chaos', 'Cat', 'Pinky', 'Falcon', 'Rock', 'Blitz', 'Toad', 'Cookie', 'Twat', 'Beanz', ''];
const spaces = ['', '_', '.'];

document.getElementById("users").addEventListener('click', () => {
  usernames();
});

function usernames() {
  document.getElementById('textarea').innerHTML = '';

  for (let i = 0; i < 5; i++) {
    var first = names[Math.floor(Math.random()*names.length)];

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
  
    var last = names[Math.floor(Math.random()*names.length)];
  
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
  
    var space = spaces[Math.floor(Math.random()*spaces.length)];
    var prefix = prefixes[Math.floor(Math.random()*prefixes.length)];
    var suffix = suffixes[Math.floor(Math.random()*suffixes.length)];
    var tag = prefix + first + space + last + suffix;
  
  
    document.getElementById('textarea').innerHTML += tag + '\n';
  }
}