var express = require('express');
var app = express();
var port    = process.env.PORT || 3000;
//var router = require('')
var bodyParser = require('body-parser');
// How do we 'require' the candyRouter file?
var candyRouter = require('./candyRouter');

//Routes
app.use(bodyParser.json({ type: 'application/json' }));
//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candies', candyRouter);



app.listen(port);