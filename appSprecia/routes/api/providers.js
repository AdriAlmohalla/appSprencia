const router = require('express').Router();

const Company = require('../../models/company.model')

router.post('', async (req, res) => {
  // lanzamos la promesa y utilizamos el try y el catch para comprobar si hay algún error en la solicitud
  try {
    const response = await Company.add(req.body)
    res.json(response)
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router