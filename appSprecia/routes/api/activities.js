const router = require('express').Router();
const upload = require('../../config/multerConfig');

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

router.put('/edit/:id', upload.single('image'), async (req, res) => {

  try {
    const imagePath = req.file.path;
    const activities = await Actividad.uploadImage(req.params.id, imagePath)
    res.status(200).json({ message: 'Image updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating image', error: error.message });
  }
})

router.get('/:id', async (req, res) => {

  try {
    const activities = await Actividad.getById(req.params.id)
    res.json(activities)
  } catch {
    res.json({ error: error.message })
  }
})


module.exports = router