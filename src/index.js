const express = require('express');
// importing the port from environment variable
const { PORT } = require('./config/serverConfig');

const create_and_start_server = async () => {
	// create an object of the express
	const app = express();

	// start the server at the specific port.
	app.listen(PORT, () => {
		console.log(`server has started at port : ${PORT}`);
	});
};

create_and_start_server();
