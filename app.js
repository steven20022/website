var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000

var app = express();

var http = require('https');
var server = http.Server(app)

//Veiw Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set Static Path
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/home', function(req, res) {
    res.render('index');
});

app.get('/production', function(req, res) {
    res.render('Production');
});

app.get('/pollution', function(req, res) {
    res.render('Pollution');
});

app.get('/life', function(req, res) {
    res.render('Life');
});

app.get('/welcome', function(req, res) {
    res.render('Welcome');
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))