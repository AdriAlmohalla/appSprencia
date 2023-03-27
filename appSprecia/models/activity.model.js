const { executeQuery } = require("../helpers/utils")
const getAll = () => {
  // utilizamos la función para ejecutar queries contra nuestra base de datos, sacamos todas las actividades de Sprecia ordenadas por precio ascendente
  return executeQuery('SELECT * FROM actividades a JOIN horarios h ON a.horario_id = h.id_horario ORDER BY precio ASC', [])
}

const getById = (id) => {
  // utilizamos la función para ejecutar queries contra nuestra base de datos, sacamos una única actividad de Sprecia pasandole el id
  return executeQuery('SELECT * FROM actividades a JOIN horarios h ON a.horario_id = h.id_horario where id_actividad = ?', [id])
}

const uploadImage = (id, imagePath) => {
  return executeQuery('UPDATE actividades SET img = ? WHERE id_actividad = ?', [imagePath, id])
}

module.exports = {
  getAll,
  getById,
  uploadImage
}