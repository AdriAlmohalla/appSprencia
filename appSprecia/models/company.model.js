const { executeQuery, executeQueryOne } = require("../helpers/utils")

const add = ({ nombre, web, localizacion, categoria_id, actividad, razon, telefono }) => {
  // utilizando nuestra función para ejecutra queries contra nuestra base de datos, sacamos todas las actividades de Sprecia
  return executeQuery('insert into empresas_proveedoras(nombre, web, localizacion, categoria_id, actividad, razon, telefono) values(?, ?, ?, ?, ?, ?, ?)', [nombre, web, localizacion, categoria_id, actividad, razon, telefono])
}

module.exports = {
  add
}