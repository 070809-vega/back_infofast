const express = require('express')
const clientesController = require('../controllers/clientesController')

const api = express.Router()

api.post('/cliente', clientesController.createCliente)

api.get('/listarClientes', clientesController.listarClientes)

module.exports = api