'use strict'

const orderRepository = require('../repositories/order_repository');
const guid = require('guid');

exports.get = async (req, res, next) => {
  const data = await orderRepository.read();
  res.status(200).send({ menssage: 'Request DONE!', data });
}

exports.post = async (req, res, next) => {

  try {
    const result =  await orderRepository.create({
      customer: req.body.customer,
      number: guid.raw().substring(0,6),
      items: req.body.items
    });
    res.status(200).send({ menssage: 'Produto cadastrado com sucesso!', result });
  } catch (e) {
    res.status(500).send({ menssage: 'Não foi possivel enviar cadastro!', e: req.body });
  }
}
