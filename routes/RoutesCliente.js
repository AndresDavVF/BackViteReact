const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

// Aca van las rutas cel CRUD
router.post('/', ClienteController.agregarClientes);
router.get('/', ClienteController.mostrarClientes);
router.get('/:id', ClienteController.mostrarUnCliente);
router.delete('/:id', ClienteController.eliminarCLlientes);
router.put('/:id', ClienteController.modificarCliente);
module.exports = router;