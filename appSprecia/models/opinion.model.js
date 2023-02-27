const { executeQuery, executeQueryOne } = require("../helpers/utils")

const getById = (id) => {
  // utilizando nuestra función para ejecutar queries, sacamos todas las opiniones de las actividades con el nombre y los apellidos del usuario que lo ha escrito
  return executeQuery('SELECT a.*, u.nombre, u.apellidos FROM opiniones_actividades a JOIN usuarios u ON a.usuario_id = u.id_usuario where actividad_id = ?', [id])
}

const getAllFromSprencia = () => {
  // utilizando nuestra función para ejecutra queries, sacamos todas las opiniones de Sprencia con el nombre y los apellidos del usuario que lo ha escrito
  return executeQuery('SELECT s.*, u.nombre, u.apellidos FROM opiniones_sprencia s JOIN usuarios u ON s.usuario_id = u.id_usuario', [])
}

module.exports = {
  getById,
  getAllFromSprencia
}