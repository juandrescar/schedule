const router = require('express').Router();

const taskRoutes = require('./task')

router.use('/tasks', taskRoutes)

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router