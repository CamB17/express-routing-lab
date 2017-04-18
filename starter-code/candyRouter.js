'use strict'
const express = require('express');
var bodyParser = require('body-parser');
var candyRouter = express.Router();
var jsonParser = bodyParser.json();
	
//Array of candies
var candies = [
		{
			"id":1,
			 "name":"Chewing Gum",
			 "color":"Red"
			},
			{
			"id":2,
			"name":"Pez",
			"color":"Green"
			},
			{
			"id":3,
			"name":"Marshmellow",
			"color":"Pink"
			},
			{
			"id":4,
			"name":"Candy Stick",
			"color":"Blue"
			}
]

//Index
candyRouter.get('/', function(req, res) {
	res.json(candies);
});


//Show specific candy based on array index
candyRouter.get("/:num", function(req, res) {
	var num = req.params.num-1;//Too get the correct id and array index
	res.json(candies[num]);
});


//Create new candy
candyRouter.post("/", function(req, res) {
	let candy = {
		id: req.body.id,
		name: req.body.name,
		color: req.body.color
	}
	candies.push(req.body); // add .push to array
	res.json(candy);
});

//Update(PUT)
candyRouter.put('/:id', function(req, res) {
	candies[req.params.id-1]=req.body;
	res.end();
});

//Delete
candyRouter.delete('/:id', function(req, res) {
	let y = req.params.id;
	for(var i = 0; i < candies.length; i++) {
		if (y == candies[i].id) {
			console.log("In if side");
				candies.splice(i, 1);
				return res.send('"message": "deleted"')
		} else { let error = 'no candy';}
	  }
	  if(error){
	  	res.send(error);
	  }
});


module.exports = candyRouter;