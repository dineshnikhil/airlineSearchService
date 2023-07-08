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

module.exports = {
	create,
};
