'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

const customerRepositor = require('../repositories/customer_repository');

exports.get = async (req, res, next) => {
  try {
    const data =  await customerRepositor.read();

    res.status(200).send({ menssage: 'Busca bem sucedida!', data });
  } catch (error){
    res.status(500).send({ message: 'Falha ao processar sua requisição!', error });
  }
};


exports.post = async (req, res, next) => {
  try {
    const customer =  new Customer(req.body);
    await customer.save();
    res.status(200).send({
      menssage: 'Cliente cadastrado com sucesso!',
      data: req.body
    })
  }
  catch (error){
      res.status(400).send({
        menssage: error
      });
  };
};

exports.put = async (req, res, next) => {
  try {
    const data = await customerRepositor.update(req);
    res.status(200).send({ menssage: 'Atualizado com sucesso!' });
  } catch (error) {
    res.status(400).send({ menssage: 'Há algo de errado!', error })
  }
}

exports.del = async (req, res, next) => {
  try {
    await customerRepositor.delete(req);
    res.status(200).send({ menssage: 'Produto removido com sucesso!' });
  } catch (error) {
    res.status(400).send({ menssage: 'Há algo de errado!', error })
  }
}
