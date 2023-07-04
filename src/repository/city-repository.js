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
}

module.exports = CityRepository;
