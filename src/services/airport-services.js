const CrudServices = require('./crud-services');
const { AirportRepository } = require('../repository/index');

class AirportServices extends CrudServices {
	constructor() {
		const airportRepository = new AirportRepository();
		super(airportRepository);
	}
}

module.exports = AirportServices;
