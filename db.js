var mongoose = require('mongoose')
var Schema = mongoose.Schema, 
	ObjectId = Schema.ObjectId;

var db_url = process.env.MONGOHQ_URL || "mongodb://localhost:27017/test", 
    db = mongoose.connect(db_url);

var recordSchema = new Schema({
    id      : ObjectId,
    foo     : String
});

var record = db.model('record', recordSchema);
