const router = require('express').Router();
const SlackController = require('../controllers/slackController');

router.get('/', async (req, res) => {
  SlackController.get(res);
});

module.exports = router;