var morgan = require('morgan');
var parser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
require('./passport.js');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(parser.json());
  app.use(cookieParser());
  app.use(expressSession({secret: 'keyboard cat', resave: false, saveUninitialized: false}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(__dirname + '/../../client'));
  app.use(express.static(__dirname + '/../../node_modules'));
  app.use(express.static(__dirname + '/../../compiled'));
};
