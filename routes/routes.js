var mongoose = require('mongoose');
var db = require('../db')
var Movie = mongoose.model('movie');

exports.getMovies = function(req, res){
	var movieList = [];

	Movie.find({}, function(err, movies) {
		if(movies) {
			movies.forEach(function(movieDoc) {
				movieList.push({
				    id 			: movieDoc.id,
				    title		: movieDoc.title, 
				    director	: movieDoc.director,
				    year		: movieDoc.year,
				    duration	: movieDoc.duration,
				    genre		: movieDoc.genre,
				    plot		: movieDoc.plot,
				    posterUrl 	: movieDoc.poster_url,
				    poster 		: movieDoc.poster,
				    path		: movieDoc.path
				});
			});
			res.status(200);
		} else {
			res.status(500);
		}
		res.send({movies: movieList});
	});
};

exports.editMovie = function(req, res){
	res.send({data: "PUT"});
};

exports.addMovie = function(req, res){
	res.send({data: "POST"});
};

exports.deleteMovie = function(req, res){
	res.send({data: "DELETE"});
};