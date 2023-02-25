// En el archivo utils creamos funciones que nos sirvan a lo largo de todo el proyecto

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

module.exports = {
  executeQuery,
  executeQueryOne
}