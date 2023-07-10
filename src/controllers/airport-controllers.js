const { AirportServices } = require('../services/index');

const airportServices = new AirportServices();

const create = async (req, res) => {
	try {
		const airport = await airportServices.create(req.body);
		return res.status(201).json({
			data: airport,
			success: true,
			message: 'Successfully created the airport.!',
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: 'Not able to created the airport.!',
			err: error,
		});
	}
};

module.exports = {
	create,
};
