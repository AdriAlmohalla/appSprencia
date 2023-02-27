const router = require('express').Router()

const apiActividades = require('./api/activities')
const apiUsuarios = require('./api/users')
const apiOpiniones = require('./api/opinions')
const apiHorarios = require('./api/times')

// Usamos el router para ir formando la url con la que nos puedan hacer peticiones desde el front
router.use('/actividades', apiActividades)
router.use('/usuarios', apiUsuarios)
router.use('/opiniones', apiOpiniones)
router.use('/horarios', apiHorarios)

module.exports = router