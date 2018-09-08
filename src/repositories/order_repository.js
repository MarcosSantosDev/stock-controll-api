'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.create = async (newOrder) => {
  const order = new Order(newOrder);
  const query = await order.save();

  return query;
}

exports.read = async () =>  await Order.find({}).populate('customer');
