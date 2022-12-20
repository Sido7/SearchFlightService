const express = require('express')
const routes = express.Router()

const cityController = require('../../controllers/city-controller')

routes.post('/city',cityController.create)


module.exports = routes