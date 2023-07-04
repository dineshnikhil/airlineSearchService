const express = require('express');
const body_parser = require('body-parser');

// importing the port from environment variable
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const create_and_start_server = async () => {
	// create an object of the express
	const app = express();
	app.use(body_parser.json());
	app.use(body_parser.urlencoded({ extended: true }));

	// start the server at the specific port.
	app.listen(PORT, () => {
		console.log(`server has started at port : ${PORT}`);
		const repo = new CityRepository();
		repo.createCity({ name: 'New Delhi' });
	});
};

create_and_start_server();
