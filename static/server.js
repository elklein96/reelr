const express = require('express');
const http = require('http');

const errorHandler = require('./error-handler');

let app = express();

app.server = http.createServer(app);

app.use(errorHandler.logError);
app.use(errorHandler.sendError);

app.use(express.static(__dirname + '/dist'));
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.server.listen(process.env.PORT || 3002);
console.log(`Express server listening on port ${app.server.address().port}`);

module.exports = app;
