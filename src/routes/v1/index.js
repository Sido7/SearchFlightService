const express = require('express')
const routes = express.Router()

const cityController = require('../../controllers/city-controller')

routes.post('/city',cityController.create)

routes.get('/city/:id',cityController.get)

routes.patch('/city/:id',cityController.update)

routes.delete('/city/:id',cityController.destroy)


module.exports = routes