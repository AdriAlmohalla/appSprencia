const router = require('express').Router()

const apiActividades = require('./api/activities')
const apiOpinionesSprecia = require('./api/opinions_sprecia')
const apiUsuarios = require('./api/users')
const apiOpinionesActividad = require('./api/opinions_activity')
const apiHorarios = require('./api/times')

// Usamos el router para ir formando la url con la que nos puedan hacer peticiones desde el front
router.use('/actividades', apiActividades)
router.use('/opiniones/sprecia', apiOpinionesSprecia)
router.use('/usuarios', apiUsuarios)
router.use('/opiniones/actividad', apiOpinionesActividad)
router.use('/horarios', apiHorarios)

module.exports = router