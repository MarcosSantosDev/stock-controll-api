'use strict'

const repository = require('../repositories/product_repository');

exports.get = async (req, res, next) => {
  try {
    const data = await repository.read();
    res.status(200).send({
      menssage:  'Sucesso!',
      data
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição!',
      error
    });
  }
};

exports.getOneProduct = async (req, res, next) => {
  try {
    await repository.getOneProduct(req.params.id)
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição!',
      error
    });
  }
};

exports.post = async (req, res, next) => {
  try  {
    await repository.create(req.body, res, next);
    res.status(200).send({
      message: 'Produto cadastrado com sucesso!',
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição!',
      error
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.update(req);
    res.status(200).send({
      message: 'Produto atualizado com sucesso!',
    });
  } catch (error) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição!',
        error
    });
  }
};

exports.del = async (req, res, next) => {
  try {
    await repository.delete(req.params.id);
        res.status(200).send({
            message: "Deletado com sucesso!",
        });
    } catch (error) {
        res.status(500).send({
          message: 'Falha ao processar sua requisição!',
          error
    });
  }
};
