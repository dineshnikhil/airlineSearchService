const express = require('express');
const router = express.Router();

const CityControllers = require('../../controllers/city-controllers');

router.post('/city', CityControllers.create);
router.delete('/city/:id', CityControllers.destory);
router.get('/city/:id', CityControllers.getcity);
router.patch('/city/:id', CityControllers.update);

module.exports = router;
