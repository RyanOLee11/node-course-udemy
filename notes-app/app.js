const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Ryan');


fs.appendFileSync('notes.txt', '\nThis is the second line');
fs.appendFileSync('notes.txt', '\nThis is the second line');