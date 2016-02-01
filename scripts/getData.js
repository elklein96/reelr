$.ajax({
    type:   "POST",
    url:    "scripts/getFiles.php",
    data:   {
        directory: 	"/home/bananapi/HDDMount/Movies"
    },
    success: function(input) {
    	var files = JSON.parse(input);
    	for(var i=0; i<files.length-2; i++){
			console.log(files[i]);
			$.ajax({
			    type:   "GET",
			    url:    "http://www.omdbapi.com/?t="+files[i]+"&plot=short&r=json",
			    success: function(meta) {
			    	var data = $.parseJSON(meta);
			        var output = '{"title":'+data["Title"]+', "director":'+data["Director"]+', "year":'+data["Released"]+', "duration":'+data["Runtime"]+', "genre":'+data["Genre"]+', "poster":'+data["Poster"]+', "path":"/path/to/file"}';
			    	console.log(output);

			    	addToDb(output);
			    }
			});
		}
    }
});

function addToDb(doc){
	var MongoClient = require('mongodb').MongoClient, format = require('util').format;

	MongoClient.connect('mongodb://127.0.0.1:27017/media', function(err, db) {
		if(err) throw err;
		
		collection.insert(doc, function(err, records){
		  console.log("Record added as "+records[0]._id);
		});
	});
}