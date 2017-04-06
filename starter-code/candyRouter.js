'use strict'
const express = require('express');
var bodyParser = require('body-parser');
let candyRouter = express.Router();
	
//Array of candies
var candies = [
				{"id":1,"name":"Chewing Gum","color":"Red"},
			   {"id":2,"name":"Pez","color":"Green"},
			   {"id":3,"name":"Marshmellow","color":"Pink"},
			   {"id":4,"name":"Candy Stick","color":"Blue"}];

//Index
candyRouter.get('/', function(req, res) {
	res.json(candies);
});


//Show specific candy based on array index
candyRouter.get("/:num", function(req, res) {
	var num = req.params.num-1;//Too get the correct id and array index
	res.json(candies[num]);
});

//Create New candy
candyRouter.get("/new", function(req, res) {
	res.send('New candy coming soon, GET /new');
});


//Show new candy
candyRouter.post("/", function(req, res) {
	candies.push(req.body);
});


//What would need to go into candies
//in order to pass our first test?

//candyRouter.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
//res.json(candies);
//});

// Fill out the rest of the routes here

module.exports = candyRouter;