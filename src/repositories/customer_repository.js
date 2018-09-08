'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

const Validation = require('../validator/validator_contract');

exports.create = async (newCustomer) => {
  const contract = new Validation();

  contract.hasMinLen(newCustomer.name, 3, 'O campo name deve ser preenchido com no minimo 3 caracteres');
  contract.hasMinLen(newCustomer.email, 3, 'O campo email deve ser preenchido com no minimo 3 caracteres');
  contract.hasMinLen(newCustomer.password, 6, 'O campo password deve ser preenchido com no minimo 6 caracteres');

  if(!contract.isValid()){
      data.status(400).send(contract.errors()).end();
      return;
  }

  Customer = new Customer(newCustomer);

  const query = await Customer.save();

  return query;
}

exports.read = async () => {
  const data = await Customer.find({}, 'name email password');

  return data;
}

exports.update = async dataCustomer => {

  const query =  await Customer.findOneAndUpdate({ _id: dataCustomer.params.id },
    {
      name: dataCustomer.body.name,
      email: dataCustomer.body.email,
      password: dataCustomer.body.password
    }
  );

  return query;
}

exports.delete = async dataCustomer => {

  const query =  await Customer.deleteOne({ _id: dataCustomer.params.id });

  return query;
}

