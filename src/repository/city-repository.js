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
			const cityObj = await city.update(data, {
				where: {
					id: cityId,
				},
			});
			return cityObj;
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = CityRepository;
