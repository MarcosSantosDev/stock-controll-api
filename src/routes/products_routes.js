'use strict'

const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products_controller');

router.get('/', productsController.get);
router.get('/:id', productsController.getOneProduct);
router.post('/', productsController.post);
router.put('/:id', productsController.put);
router.delete('/:id', productsController.del);

module.exports = router;
