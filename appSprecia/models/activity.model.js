const { executeQuery, executeQueryOne } = require("../helpers/utils")

const getAll = () => {
  // utilizamos la función para ejecutar queries contra nuestra base de datos, sacamos todas las actividades de Sprecia
  return executeQuery('SELECT * FROM actividades a JOIN horarios h ON a.horario_id = h.id_horario', [])
}

const getById = (id) => {
  // utilizamos la función para ejecutar queries contra nuestra base de datos, sacamos una única actividad de Sprecia pasandole el id
  return executeQuery('SELECT * FROM actividades a JOIN horarios h ON a.horario_id = h.id_horario where id_actividad = ?', [id])
}

module.exports = {
  getAll,
  getById
}