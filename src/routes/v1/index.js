const express = require('express')
const routes = express.Router()

const cityController = require('../../controllers/city-controller')
const flightController = require('../../controllers/flight-controller')

routes.post('/city',cityController.create)

routes.get('/city/:id',cityController.get)

routes.get('/city',cityController.allCities)

routes.patch('/city/:id',cityController.update)

routes.delete('/city/:id',cityController.destroy)

routes.post('/flights',flightController.create)


module.exports = routes