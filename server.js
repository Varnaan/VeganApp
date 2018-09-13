let http = require('http');
let fs = require('fs');
let recipes = JSON.parse(fs.readFileSync('./recipes.json').toString());


let server = http.createServer(function(req, res){
    res.console.log('hello');
});
const result = recipes.recipe;
server.listen(8080);
console.log('server running');
console.log((result));
