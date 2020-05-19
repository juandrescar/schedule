const router = require('express').Router();

const taskRoutes = require('./task')
const slackRoutes = require('./slack')

router.use('/tasks', taskRoutes)
router.use('/slacks', slackRoutes)

module.exports = router