const { CityServices } = require('../services/index');

const cityServices = new CityServices();

/**
 * POST -> /city -> req.body
 * creating the new city.
 */
const create = async (req, res) => {
	try {
		const city = await cityServices.createCity(req.body);
		return res.status(201).json({
			data: city,
			success: true,
			message: 'Successfully created the city.!',
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: 'Not able to created the city.!',
			err: error,
		});
	}
};

/**
 * DELETE -> /city/:id
 * deleting the city based on the id menstioned.
 */
const destory = async (req, res) => {
	try {
		const response = await cityServices.deleteCity(req.params.id);
		return res.status(201).json({
			data: response,
			success: true,
			message: 'Successfully deleted the city.!',
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: 'Not able to delete the city.!',
			err: error,
		});
	}
};

/**
 * PATCH -> /city/:id -> req.body
 * updating the city row using the given the city id and properity give to update.
 */
const update = async (req, res) => {
	try {
		const city = await cityServices.updateCity(req.params.id, req.body);
		return res.status(201).json({
			data: city,
			success: true,
			message: 'Successfully updated the city.!',
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: 'Not able to update the city.!',
			err: error,
		});
	}
};

/**
 * GET -> /city/:id
 * getting the city based on the given id of the city.
 */
const getcity = async (req, res) => {
	try {
		const city = await cityServices.getCity(req.params.id);
		return res.status(201).json({
			data: city,
			success: true,
			message: 'Successfully fetched the city.!',
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: 'Not able to fetch the city.!',
			err: error,
		});
	}
};

/**
 * GET -> /city
 * getting all the cities avaliable in the database.
 */
const getAll = async (req, res) => {
	try {
		const cities = await cityServices.getAllCities();
		return res.status(201).json({
			data: cities,
			success: true,
			message: 'Successfully fetched the cities.!',
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: 'Not able to fetch the cities.!',
			err: error,
		});
	}
};

module.exports = {
	create,
	destory,
	update,
	getcity,
	getAll,
};
