const express = require('express')
const routes = express.Router()
const v1Api = require('./v1/index')

routes.use('/v1',v1Api)

module.exports = routes

