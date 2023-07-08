const express = require('express');
const router = express.Router();

const CityControllers = require('../../controllers/city-controllers');
const FlightControllers = require('../../controllers/flight-controllers');

router.post('/city', CityControllers.create);
router.delete('/city/:id', CityControllers.destory);
router.get('/city/:id', CityControllers.getcity);
router.get('/city', CityControllers.getAll);
router.patch('/city/:id', CityControllers.update);

router.post('/flights', FlightControllers.create);

module.exports = router;
