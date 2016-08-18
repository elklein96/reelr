var mongoose = require('mongoose');
var db = require('../db')
var record = mongoose.model('record');

exports.fetch = function(req, res){
	res.send({data: "GET"});
};

exports.change = function(req, res){
	res.send({data: "PUT"});
};

exports.create = function(req, res){
	res.send({data: "POST"});
};

exports.remove = function(req, res){
	res.send({data: "DELETE"});
};