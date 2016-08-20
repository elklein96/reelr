var express = require('express');
var http = require('http');

var app = express();

var routes = require('./routes/routes');

app.set('port', process.env.PORT || 8080);

app.use("/app", express.static(__dirname + "/public/app"));
app.use("/img", express.static(__dirname + "/public/app/img"));
app.use("/css", express.static(__dirname + "/public/css"));

app.put('/api/movies', routes.getMovies);
//app.put('/api/movies', routes.editMovie);
app.post('/api/movies', routes.addMovie);
app.delete('/api/movies', routes.deleteMovie);

app.get('*', function(req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

module.exports = app;