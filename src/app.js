'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const enviroment = {
    username: '',
    password: '',
    host: '',
    port: '',
    database: ''
}
// connection params: mongodb://username:password@host:port/database
mongoose.connect('mongodb://${enviroment.username}:${enviroment.password}@${enviroment.host}:${enviroment.port}/${enviroment.database}');

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
