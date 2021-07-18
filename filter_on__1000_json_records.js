var json = require('./1000.json');


var fil = json.filter((fil) => fil.first_name == "Meggi");

console.log(fil)