const router = require('express').Router();

const { response } = require('express');
const Opinion = require('../../models/opinion_activity.model')


// Utilizamos el router para crear peticiones url que nos puedan hacer desde el front
router.get('', async (req, res) => {
  // lanzamos la promesa y utilizamos el try y el catch para comprobar si hay algún error en la solicitud
  try {
    const opiniones = await Opinion.getAll()
    res.json(opiniones)
  } catch {
    res.json({ error: error.message })
  }
})

module.exports = router