// En el archivo utils creamos funciones que nos sirvan a lo largo de todo el proyecto
const dayjs = require('dayjs')
const jwt = require('jsonwebtoken')

/**
 * Ejecuta una sentencia sql contra la BBDD y nos devuelve un array con el resultado
 * @param {string} sql 
 * @param {any{}} arr 
 * @returns 
 */

const executeQuery = (sql, arr) => {
  return new Promise((resolve, reject) => {
    db.query(sql, arr, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

/**
 * Ejecuta una sentencia contra la BBDD y me devuelve un objeto
 * @param {string} sql 
 * @param {any[]} arr 
 * @returns 
 */

const executeQueryOne = (sql, arr) => {
  return new Promise((resolve, reject) => {
    db.query(sql, arr, (err, result) => {
      if (err) reject(err)
      // Si no encuentra ese id
      if (result.length === 0) resolve(null)
      // Si encuentra el (id)
      resolve(result[0])
    })
  })
}


// Usarmos la libreria jsonwebtoken para crear el token pasandole el id del usuario y la fecha de expiracion encriptada
const createToken = (user) => {
  const obj = {
    user_id: user.id,
    exp_date: dayjs().add(5, 'minutes').unix()
  }

  return jwt.sign(obj, 'token')
}

module.exports = {
  executeQuery,
  executeQueryOne,
  createToken
}