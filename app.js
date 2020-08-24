var express = require('express');

//Sets colors on error messages
var chalk = require('chalk');
var debug = require('debug');
var morgan = require('morgan');

//handles directory pathnames irrespective of platform
var path = require('path');

var app = express();

app.use(morgan('tiny'));
//setting up a static directory for static files
app.use(express.static(path.join(__dirname, '/public/')));
// for css files also check here if not in public folder
app.use('/css',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
//for js and jquery files check here if not in public folder
app.use('/js',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname,'/node_modules/bootstrap/jquery/dist')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname ,'views/index.html'));
});

app.listen(3000, function(){
    debug(`Listening on port' ${chalk.green('3000')}`); //template strings
});
