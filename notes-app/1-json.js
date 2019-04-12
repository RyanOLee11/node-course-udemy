const fs = require('fs');

var dataBuffer = fs.readFileSync('1-json.json');
var dataString = dataBuffer.toString();
var data = JSON.parse(dataString);


data.name = 'Ryan Lee'; 
data.age = 'Infinite';

dataString = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataString);
console.log(data.name);
