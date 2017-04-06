'use strict'
const express = require('express');
var bodyParser = require('body-parser');
let candyRouter = express.Router();
	
//Array of candies
var candies = [
			   {"id":1,"name":"Chewing Gum","color":"Red"},
			   {"id":2,"name":"Pez","color":"Green"},
			   {"id":3,"name":"Marshmellow","color":"Pink"},
			   {"id":4,"name":"Candy Stick","color":"Blue"}
			  ];

//Index
candyRouter.get('/', function(req, res) {
	res.json(candies);
});


//Show specific candy based on array index
candyRouter.get("/:num", function(req, res) {
	var num = req.params.num-1;//Too get the correct id and array index
	res.json(candies[num]);
});


//Show new candy(POST)
candyRouter.post("/", function(req, res) {
	candies.push(req.body); // add .push to array
});

//Update(PUT)
candyRouter.put('/', function(req, res) {
	for(i = 3; i < candies.length; i++); // Create for loop?
		candies.send(req.body);
});

//Delete
//candyRouter.delete("/", function(req, res) {
//	candies.send(candies[3]); // Delete from body
//});



module.exports = candyRouter;