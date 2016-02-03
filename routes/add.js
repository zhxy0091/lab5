var data = require("../data.json");



exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var desc = req.query.description;

	var newFriend = {
	"name": req.query.name,
	"description": req.query.description,
	"imageURL": "http://lorempixel.com/500/500/people"
	}
	console.log(newFriend);
	data["friends"].push(newFriend);
	res.render('add', data);

 }