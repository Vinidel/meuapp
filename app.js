const KEY = 'meuapp.sid', SECRET = 'meuapp';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var load = require('express-load');
//session
var expressSession = require('express-session');
var cookie = cookieParser(SECRET);
var store = new expressSession.MemoryStore();

//changing to Express-load
// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('meuapp'));
app.use(expressSession({
	secret: SECRET,
	name: KEY,
	resave: true,
	saveUninitialized: true,
	store: store
	}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//changing to Express-load
// app.use('/', routes);
// app.use('/users', users);

load('models')
  .then('controllers')
  .then('routes')
  .into(app)


app.listen(3000, function(){
  console.log("App no ar!!");
});
