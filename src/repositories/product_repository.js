'use strict'

const mongoose = require('mongoose');
const ValidationContract = require('../validator/validator_contract');

const Product = mongoose.model('Product');

exports.read = async () =>  await Product.find({ active: true }, 'title slug price');

exports.getOneProduct = async id => await Product.findOne({ _id: id }, 'title slug price');

exports.create = async (newProduct, data) => {
  let contract = new ValidationContract();

  contract.hasMinLen(newProduct.title, 3, 'O campo title deve ser preenchido com no minimo 3 caracteres');
  contract.hasMinLen(newProduct.slug, 3, 'O campo slug deve ser preenchido com no minimo 3 caracteres');
  contract.hasMinLen(newProduct.description, 3, 'O campo description deve ser preenchido com no minimo 3 caracteres');

  if(!contract.isValid()){
      data.status(400).send(contract.errors()).end();
      return;
  }

  const product = new Product(newProduct);

  const query = await product.save();

  return query;
}

exports.update = async data => {
  await Product.findOneAndUpdate({ _id: data.params.id },
    {
      title: data.body.title, slug: data.body.slug,
      description: data.body.description, price: data.body.price
    })
}

exports.delete = async id => {
  const data = await Product.findOneAndDelete({ _id: id});
  return data;
}
