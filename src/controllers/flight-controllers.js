const { FlightServices } = require('../services/index');

const flightServices = new FlightServices();

const create = async (req, res) => {
	try {
		const flight = await flightServices.createFlight(req.body);
		return res.status(201).json({
			data: flight,
			success: false,
			message: 'Successfully created the flight.!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: 'Not able to created the flight.!',
			err: error,
		});
	}
};

const getAll = async (req, res) => {
	try {
		const filghts = await flightServices.getAllFlights(req.query);
		return res.status(200).json({
			data: filghts,
			success: true,
			message: 'Successfuly fetched the flights.!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: 'Not able to fetch the flights.!',
			err: error,
		});
	}
};

module.exports = {
	create,
	getAll,
};
