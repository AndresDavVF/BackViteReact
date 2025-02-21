const express = require('express');
const router = express.Router();
const ProveedorController = require('../controllers/ProveedorController');

// Aca van las rutas cel CRUD
router.post('/', ProveedorController.agregarProveedor);
router.get('/', ProveedorController.mostrarProveedores);
router.get('/:id', ProveedorController.mostrarUnProveedor);
router.delete('/:id', ProveedorController.eliminarProveedores);
router.put('/:id', ProveedorController.modificarProveedor);
module.exports = router;