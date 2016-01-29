var destinationController = function() {
    var getDestinationByName = function(req, res) {
        var mulas = require('../../data/mulas');
        var data = mulas.filter(function(element, index, array) {
            return element.destino === req.params.destination;
        });
        res.render('muleListView', {
            title: 'Lista de Mulas',
            data: data
        });
    };

    return {
        getDestinationByName: getDestinationByName
    };
};

module.exports = destinationController;
