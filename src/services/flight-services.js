const { FlightRepository, AirplaneRepository } = require('../repository/index');

const { compareTimes } = require('../utils/helpers');

/**
 * below is the data format that is coming from the controllers
 * {
 *  flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  boardingGate,
 *  totalSeats -> airplane
 * }
 */

class FlightServices {
	constructor() {
		this.airplaneRepository = new AirplaneRepository();
		this.flightRepository = new FlightRepository();
	}

	async createFlight(data) {
		try {
			if (!compareTimes(data.arrivalTime, data.departureTime)) {
				throw { error: 'arrival time can not be less that departure time.' };
			}
			const airplane = await this.airplaneRepository.getAirplane(
				data.airplaneId
			);
			const flight = await this.flightRepository.createFlight({
				...data,
				totalSeats: airplane.capacity,
			});
			return flight;
		} catch (error) {
			console.log('something went wrong in the service layer!');
			throw { error };
		}
	}
}

module.exports = FlightServices;
