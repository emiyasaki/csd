var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 29999;

var destinationRouter = require('./src/routes/destinationRoutes');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Destination', destinationRouter);

app.get('/', function(req, res) {
	//Substituir por dados reais
	var dest = require('./data/destination');
	
    res.render('index', {
        title: 'Ant Flow',
        dest: dest
    })
});


app.listen(port, function(err) {
    console.log('server running on port ' + port);
});
