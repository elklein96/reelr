const express = require('express');
const session = require('express-session');
const passport = require('passport');
const http = require('http');
const path = require('path');

const errorHandler = require('./error-handler');
const environmentConfigs = require('../config.json');

let app = express();

app.server = http.createServer(app);

app.use(session({
    secret: environmentConfigs.session_secret_key, 
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(errorHandler.logError);
app.use(errorHandler.sendError);

app.use('/media', isLoggedIn, express.static(path.join(__dirname, '/../media')))
app.use(express.static(path.join(__dirname, '/../dist')));
app.get('*', isLoggedIn, (req, res, next) => {
    res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() || req.path === '/login') {
        return next();
    }
    res.redirect('/login');
}

app.server.listen(process.env.PORT || 3002);
console.log(`Express server listening on port ${app.server.address().port}`);

module.exports = app;
