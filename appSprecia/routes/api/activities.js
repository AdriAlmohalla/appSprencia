const router = require('express').Router();

const { response } = require('express');
const Actividad = require('../../models/activity.model')


// Utilizamos el router para crear peticiones url que nos puedan hacer desde el front
router.get('', async (req, res) => {
  // lanzamos la promesa y utilizamos el try y el catch para comprobar si hay algún error en la solicitud
  try {
    const activities = await Actividad.getAll()
    res.json(activities)
  } catch {
    res.json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {

  // lanzamos la promesa y utilizamos el try y el catch para comprobar si hay algún error en la solicitud, además de pasamos el id que viene de la url a la función getById para que haga la busqueda de una única actividad
  try {
    const activities = await Actividad.getById(req.params.id)
    res.json(activities)
  } catch {
    res.json({ error: error.message })
  }
})

module.exports = router