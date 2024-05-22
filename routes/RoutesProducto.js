const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductoController');

// Aca van las rutas cel CRUD
router.post('/', ProductController.agregarProducto);
router.get('/', ProductController.mostrarProductos);
router.get('/:id', ProductController.mostrarUnProducto);
router.delete('/:id', ProductController.eliminarProductos);
router.put('/:id', ProductController.modificarProducto);
module.exports = router;