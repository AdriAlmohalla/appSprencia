const router = require('express').Router();
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator');
const { createToken } = require('../../helpers/utils');

const User = require('../../models/user.model')

router.post('/register',

  // comprobamos que nos vienen en el body todos los valores necesarios para el registro 
  body('username')
    .exists()
    .withMessage('El campo username es requerido')
    .isLength({ min: 3 })
    .withMessage('El campo username debe tener una longitud minima de 3 caracteres'),
  body('nombre')
    .exists()
    .withMessage('El campo nombre es requerido'),
  body('apellidos')
    .exists()
    .withMessage('El campo apellidos es requerido'),
  body('residencia')
    .exists()
    .withMessage('El campo residencia es requerido'),
  body('email')
    .exists()
    .withMessage('El campo email es requerido')
    .matches(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .withMessage('Debe de tener un formato correcto'),
  body('password')
    .exists()
    .withMessage('El campo password es requerido'),

  async (req, res) => {

    // Guardamos los errores y detenemos el registro si hay alguno
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.json(errors.array())
    }

    // Encriptamos la contraseña con la libreria bcriptjs antes de guardarla
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10)

      // Guardamos el nuevo usuario en la base de datos
      const result = await User.create(req.body)

      res.json(result)
    } catch (error) {
      res.json({ error: error.message })
    }
  }
)

router.post('/login', async (req, res) => {

  const { username, password } = req.body

  // Primero comprobamos que existe el usuario en la base de datos
  const user = await User.getByUsername(username)

  // Detenemos la busqueda y lanzamos error si no ha encontrado el usuario
  if (!user) {
    return res.json({ error: 'No se ha encontrado ese username' })
  }

  console.log(user)
  console.log(password, user.password)

  // Con la libreria bcrypt comprobamos que coinciden las contraseñas
  const equals = bcrypt.compareSync(password, user.password)

  if (!equals) {
    return res.json({ error: 'Las contraseñas no coinciden' })
  }

  res.json({
    success: 'Login correcto!',
    token: createToken(user)
  })
})


module.exports = router;