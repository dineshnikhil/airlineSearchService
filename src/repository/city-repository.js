const { Op } = require('sequelize');

const { city } = require('../models/index');

class CityRepository {
	async createCity({ name }) {
		try {
			const cityRes = await city.create({ name });
			return cityRes;
		} catch (err) {
			throw { err };
		}
	}

	async deleteCity(cityId) {
		try {
			await city.destory({
				where: {
					id: cityId,
				},
			});
		} catch (err) {
			throw { err };
		}
	}

	async getCity(cityID) {
		try {
			const cityObj = await city.findByPk(cityID);
			return cityObj;
		} catch (error) {
			console.log(error);
		}
	}

	async updateCity(cityId, data) {
		try {
			// below approch also works but not returns the updated object.

			// const cityObj = await city.update(data, {
			// 	where: {
			// 		id: cityId,
			// 	},
			// });

			const cityObj = await city.findByPk(cityId);
			cityObj.name = data.name;
			await cityObj.save();

			return cityObj;
		} catch (error) {
			console.log(error);
		}
	}

	async getAllCities(filter) {
		try {
			if (filter.name) {
				const cities = await city.findAll({
					where: {
						name: {
							[Op.startsWith]: filter.name,
						},
					},
				});
				return cities;
			}
			const cities = await city.findAll();
			return cities;
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = CityRepository;
