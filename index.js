
var pug = require('pug');
var express = require("express");
var app = express();
var server = require('http').createServer(app);

// Compile the source code
var compiledFunction = pug.compileFile('template.pug');

// Render a set of data
console.log(compiledFunction({
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
console.log(compiledFunction({
  name: 'Forbes'
}));
// "<p>Forbes's Pug source code!</p>"


server.listen(process.env.PORT || 3000);
console.log('Server Started . . .');

app.get('/', function(req, res) {
  res.send(compiledFunction( { name: 'Vincent'} ));
});

