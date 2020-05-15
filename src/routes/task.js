const router = require('express').Router();
const TaskController = require('../controllers/taskController');
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

router.get('/', async (req, res) => {
  TaskController.get(res);
});

router.post('/', [
  check('title').exists().withMessage('Debe agregar un titulo'),
  check('date').exists().withMessage('Debe agregar una fecha').isISO8601().toDate().withMessage('El Formato de la fecha debe ser YYYY-MM-DD'),
  check('slackChannel').exists().withMessage('Debe agregar un canal de slack'),
],async (req, res, next) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      success: false,
      message: "Error en parámetros",
      errors: _.map(errors.array(), function (msg){
        return {
          field: msg.param,
          msg: msg.msg
        };
      }) 
    });
  }

  TaskController.save(req.body, res);
});

router.get('/:id', async (req, res, next) => {
  let { id } = req.params;
  TaskController.findOne(id, res);
});

router.put('/:id',[
  check('title').exists().withMessage('Debe agregar un titulo'),
  check('date').exists().withMessage('Debe agregar una fecha').isISO8601().toDate().withMessage('El Formato de la fecha debe ser YYYY-MM-DD'),
  check('slackChannel').exists().withMessage('Debe agregar un canal de slack'),
  ], async (req, res, next) => {
  const { id } = req.params;

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      success: false,
      message: "Error en parámetros",
      errors: _.map(errors.array(), 'msg') 
    });
  }
  
  TaskController.update(req, res, id);
});

router.delete('/:id', async (req, res, next) => {
  let { id } = req.params;
  TaskController.delete(id, res);
  
});

module.exports = router;