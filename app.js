const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const cors = require('cors');
const path = require('path');


// Cors
app.use(cors(require('./config/cors')));

const bodyParser = require('body-parser');

// Start server on pre-defined port
server.listen(port, () => {
    console.log('server is listening on port ' + port)
});

// Dotenv used to read process.env
require('dotenv').config();


// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", express.static(__dirname + '/dist'));

// // Passport.js config
// const passport = require('passport');
// require('./config/google-passport-strategy')(passport);
// require('./config/facebook-passport-strategy')(passport);
// app.use(passport.initialize({}));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/states', require('./routes/states'));
app.use('/users', require('./routes/users'));
app.use('/counties', require('./routes/counties'));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});




