const { clientErrorCodes } = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {
	if (
		!req.body.flightNumber ||
		!req.body.airplaneId ||
		!req.body.departureAirportId ||
		!req.body.arrivalAirportId ||
		!req.body.arrivalTime ||
		!req.body.departureTime ||
		!req.body.price ||
		!req.body.boardingGate
	) {
		return res.status(clientErrorCodes.BAD_REQUEST).json({
			data: {},
			success: false,
			message: 'Invalid request body for create flight.!',
			error: 'Missing mandatory propties to create flight.!',
		});
	}

	next();
};

module.exports = {
	validateCreateFlight,
};
