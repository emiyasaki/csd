var express = require('express');
var destinationRouter = express.Router();
var mulas = require('../../data/mulas');

var router = function() {
    //var destinationController = require('../controllers/destinationController');
    
    destinationRouter.route('/')
        .get(function(req, res){
            res.render('muleListView', {
                title: 'Lista de Mulas',
                data: mulas
            });
        });

    destinationRouter.route('/:destination')
        .get(function(req, res) {
            var data = mulas.filter(function(element, index, array) {
                return element.destino === req.params.destination;
            });
            res.render('muleListView', {
                title: 'Lista de Mulas',
                data: data
            });
        });

    return destinationRouter;
};

module.exports = router;
