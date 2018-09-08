'use strict'

const express = require('express');
const router = express.Router();

const customer = require('../controllers/customer_controller');

router.get('/', customer.get);

router.post('/', customer.post);

router.put('/:id', customer.put);

router.delete('/:id', customer.del);

module.exports = router;
