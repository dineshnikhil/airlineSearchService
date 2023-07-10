class CrudServices {
	constructor(repository) {
		this.respository = repository;
	}

	async create(data) {
		try {
			const result = await this.respository.create(data);
			return result;
		} catch (error) {
			console.log('Something went wrong in the crud services..!');
			throw { error };
		}
	}

	async delete(id) {
		try {
			const result = await this.respository.delete(id);
			return result;
		} catch (error) {
			console.log('Something went wrong in the crud services..!');
			throw { error };
		}
	}

	async get(id) {
		try {
			const result = await this.respository.get(id);
			return result;
		} catch (error) {
			console.log('Something went wrong in the crud services..!');
			throw { error };
		}
	}

	async getAll() {
		try {
			const result = await this.respository.getAll();
			return result;
		} catch (error) {
			console.log('Something went wrong in the crud services..!');
			throw { error };
		}
	}

	async update(id, data) {
		try {
			const result = await this.respository.update(id, data);
			return result;
		} catch (error) {
			console.log('Something went wrong in the crud services..!');
			throw { error };
		}
	}
}

module.exports = CrudServices;
