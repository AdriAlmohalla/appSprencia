const { executeQuery, executeQueryOne } = require("../helpers/utils")

// con esta query creamos un nuevo usuario
const create = ({ username, nombre, apellidos, residencia, email, password }) => {
  return executeQuery('insert into usuarios(username, nombre, apellidos, residencia, email, password) values(?, ?, ?, ?, ?, ?)', [username, nombre, apellidos, residencia, email, password])
}

// query para recuperar un único usuario pasando el username
const getByUsername = (username) => {
  return executeQueryOne('select * from usuarios where username = ?', [username])
}

const getById = (id) => {
  return executeQueryOne('select * from usuarios where id = ?', [id])
}

module.exports = {
  create,
  getByUsername,
  getById
}