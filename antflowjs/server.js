var express = require('express');
var bodyParser = require('body-parser');

var mulas = require('./data/mulas');

var app = express();

var port = process.env.PORT || 29999;

var destinationRouter = require('./src/routes/destinationRoutes');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

//app.use('/Destination', destinationRouter);

app.get('/', function (req, res) {
    //Substituir por dados reais
    var dest = require('./data/destination');

    res.render('index', {
        title: 'Ant Flow',
        dest: dest
    })
});

app.get('/Destination/:dest', function (req, res) {
    var data = mulas.filter(function (element, index, array) {
        return element.destino === req.params.dest;
    });
    res.render('muleListView', {
        title: 'Lista de Mulas',
        data: data
    });
});

app.get('/Destination/', function (req, res) {
    res.render('muleListView', {
        title: 'Lista de Mulas',
        data: mulas
    });
});

app.listen(port, function (err) {
    console.log('server running on port ' + port);
});
