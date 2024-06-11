const service = require("../services/sqlCrud.service");

async function get(req, res, next) {
  try {
    res.json(await service.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error: `, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await service.create(req.body));
  } catch (err) {
    console.error(`Error: `, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await service.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error: `, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await service.remove(req.params.id));
  } catch (err) {
    console.error(`Error: `, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
};
