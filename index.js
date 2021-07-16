const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const server = express('server');

const loginRequestHandler = (req, res) => {
     console.log(req.body.email);
     console.log(req.body.password);
     res.send('Done');
};
const signupRequestHandler = (req, res) => {
     console.log(req.body.fullname);
     console.log(req.body.email);
     console.log(req.body.password);
     console.log(req.body.confirmpassword);
     res.send('Signup Successfully');
};

//middleware definitions
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: false }));

//route
server.post('/login', loginRequestHandler);
server.post('/signup', signupRequestHandler);

server.listen(3000, () => console.log('server is ready'));
