const express = require('express')
const routes = express.Router()

const {flightMiddleware} = require('../../middleware/index')

const cityController = require('../../controllers/city-controller')
const flightController = require('../../controllers/flight-controller')
const airportController = require('../../controllers/airport-controller')

routes.post('/city',cityController.create)

routes.get('/city/:id',cityController.get)

routes.get('/city',cityController.allCities)

routes.patch('/city/:id',cityController.update)

routes.delete('/city/:id',cityController.destroy)

routes.post('/flights',flightMiddleware.validateCreateFlight,flightController.create)

routes.get('/flights',flightController.getAll)

routes.post('/airports',airportController.createAirport)


module.exports = routes