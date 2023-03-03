const { executeQuery } = require("../helpers/utils")

const getAll = () => {
  // utilizando nuestra función para ejecutra queries contra nuestra base de datos, sacamos todas las actividades de Sprecia
  return executeQuery('select * from horarios', [])
}

module.exports = {
  getAll
}