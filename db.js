var mongoose = require('mongoose')
var Schema = mongoose.Schema, 
	ObjectId = Schema.ObjectId;

var db_url = process.env.MONGOHQ_URL || "mongodb://localhost:27017/media", 
    db = mongoose.connect(db_url);

var movieSchema = new Schema({
    _id			: ObjectId,
    id 			: String,
    date_add	: String,
    title		: String, 
    director	: String,
    year		: String,
    duration	: String,
    genre		: String,
    plot		: String,
    poster_url 	: String,
    poster 		: String,
    path		: String
});

var Movie = db.model('movie', movieSchema);
