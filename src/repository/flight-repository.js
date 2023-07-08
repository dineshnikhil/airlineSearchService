const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {
	#createFilter(data) {
		var filter = {};
		if (data.arrivalAirportId) {
			filter.arrivalAirportId = data.arrivalAirportId;
		}
		if (data.departureAirportId) {
			filter.departureAirportId = data.departureAirportId;
		}
		if (data.minPrice) {
			Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
		}

		return filter;
	}

	async createFlight(data) {
		try {
			const flight = await Flight.create(data);
			return flight;
		} catch (error) {
			console.log('Something went wrong in the Repository layer..!');
			throw { error };
		}
	}

	async getFlight(id) {
		try {
			const flight = await Flight.findByPk(id);
			return flight;
		} catch (error) {
			console.log('Something went wrong in the Repository layer..!');
			throw { error };
		}
	}

	async getAllFlight(filter) {
		try {
			const filterObject = await this.#createFilter(filter);
			const flight = await Flight.findAll({
				where: filterObject,
			});
			return flight;
		} catch (error) {
			console.log('Something went wrong in the Repository layer..!');
			throw { error };
		}
	}
}

module.exports = FlightRepository;
