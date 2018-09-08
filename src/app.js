'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://marcosdev:root123@ds253840.mlab.com:53840/nodestore');

const ProductSchema = require('./models/product_schema');
const CustomerSchema = require('./models/customer_schema');
const OrderSchema = require('./models/order_schema');

const indexRouter = require('./routes/index_route');
const productsRouter = require('./routes/products_routes');
const customersRoute = require('./routes/customer_routes');
const ordersRoute = require('./routes/order_routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/customer', customersRoute);
app.use('/orders', ordersRoute);

module.exports = app;
