require('../node_modules/datejs/lib/date-pt-BR');

var mulas = [
	{
		id: 0,
		nome: 'Anastácia',
		idade: 30,
		profissao: 'Aeromoça',
		descricao: 'Lorem ipsum',
		data: Date.today().addMonths(1).toString('dd/MM/yyyy'),
		origem: 'Londres',
		destino: 'São Paulo-SP'
	},
	{
		id: 1,
		nome: 'Vanessa',
		idade: 38,
		profissao: 'Dona de casa',
		descricao: 'Bla bla',
		data: Date.today().addMonths(2).toString('dd/MM/yyyy'),
		origem: 'Colonia',
		destino: 'São Paulo-SP'
	},
	{
		id: 2,
		nome: 'Jordânia',
		idade: 24,
		profissao: 'Garçonete',
		descricao: 'bla bla bla',
		data: Date.today().addDays(15).toString('dd/MM/yyyy'),
		origem: 'Nova Iorque',
		destino: 'Franca-SP'
	}
];

module.exports = mulas;