var express = require('express');

//Sets colors on error messages
var chalk = require('chalk');
var debug = require('debug');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));

app.get('/', function(req, res){
    res.send('Hello from my library app');
});

app.listen(3000, function(){
    debug(`Listening on port' ${chalk.green('3000')}`); //template strings
});
