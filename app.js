/* eslint-disable linebreak-style */
const express = require('express');

// Sets colors on error messages
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');

// handles directory pathnames irrespective of platform
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('tiny'));

// setting up a static directory for static files
app.use(express.static(path.join(__dirname, '/public/')));

// for css files also check here if not in public folder
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
// for js and jquery files check here if not in public folder
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  debug(`Listening on port' ${chalk.green(port)}`); // template strings
});
