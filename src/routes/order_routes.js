'use strict'

const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order_controller');

router.get('/', orderController.get);
router.post('/', orderController.post);

module.exports = router;
