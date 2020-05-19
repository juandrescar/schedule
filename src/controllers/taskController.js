const Task = require('../model/task');
const SlackController = require('../controllers/slackController');

class TaskController {
  async get(res) {
    const tasks = await Task.find().catch(error => {
      res.status(500).json(this.notification(false, 'Error en el servidor', null, error));
    });

    res.status(200).json(this.notification(true, 'Listado de tareas encontrado', tasks, null));
  }

  async save(req, res) {
    const task = new Task(req);
    await task.save().catch(error => {
      res.status(500).json(this.notification(false, 'Error en el servidor', null, error));
    });
    
    const messageSlack = await SlackController.sendMessage(task, 'Creado');
    if(!messageSlack.ok)
    {
      res.status(200).json(this.notification(messageSlack.ok, 'Error en el servidor de Slack', task, [{msg: messageSlack.error}]));
    }
    res.status(200).json(this.notification(true, 'Se ha guardado exitosamente la nueva tarea.', task, null));
  }

  async findOne(id, res) {
    const task = await Task.findById(id)
    .catch( error => {
      res.status(500).json(this.notification(false, 'Error en el servidor', null, error));
    });

    if(task){
      res.status(200).json(this.notification(true, 'Tarea encontrada', task, null));
    } else {
      res.status(404).json(this.notification(false, 'Tarea no encontrada', task, null));
    }
    
  }

  async update(req, res, id) {
    const task = await Task.findOneAndUpdate({_id: id}, req.body, {new: true})
    .catch((error) => {
      res.status(500).json(this.notification(false, 'Error en el servidor', null, error));
    });
    if(task){
      const messageSlack = await SlackController.sendMessage(task, 'Actualizado');
      if(!messageSlack.ok)
      {
        res.status(200).json(this.notification(messageSlack.ok, 'Error en el servidor de Slack', task, [{msg: messageSlack.error}]));
      }
      res.status(200).json(this.notification(true, 'Se ha actualizado exitosamente la tarea.', task, null));
    } else {
      res.status(404).json(this.notification(false, 'Tarea no encontrada para modificar.', task, null));
    }
  }

  async toggleTask(req, res, id) {
    const task = await Task.findOneAndUpdate({_id: id}, req.body, {new: true})
    .catch((error) => {
      res.status(500).json(this.notification(false, 'Error en el servidor', null, error));
    });
    if(task){
      const action = task.status ? 'Completado' :  'Reabierto'
      const messageSlack = await SlackController.sendMessage(task, action);
      if(!messageSlack.ok)
      {
        res.status(200).json(this.notification(messageSlack.ok, 'Error en el servidor de Slack', task, [{msg: messageSlack.error}]));
      }
      let text;
      if(task.status) {
        text = 'Se ha completado exitosamente la tarea.';
      } else {
        text = 'Se ha reabierto la tarea.';
      }
      res.status(200).json(this.notification(true, text, task, null));
    } else {
      res.status(404).json(this.notification(false, 'Tarea no encontrada para modificar.', task, null));
    }
  }

  async delete(id, res) {
    const task = await Task.findByIdAndRemove(id)
    .catch((error) => {
      res.status(500).json(this.notification(false, 'Error en el servidor', null, error));
    });
    if(task){
      const messageSlack = await SlackController.sendMessage(task, 'Eliminado');
      if(!messageSlack.ok)
      {
        res.status(200).json(this.notification(messageSlack.ok, 'Error en el servidor de Slack', null, [{msg: messageSlack.error}]));
      }
      res.status(200).json(this.notification(true, 'Se ha eliminado exitosamente la tarea.', null, null));
    } else {
      res.status(404).json(this.notification(false, 'Tarea no encontrada.', task, null));
    }
  }
  
  notification(ifSuccess, msg, response, error) {
    if(ifSuccess) {
      return {
        success: ifSuccess,
        message: msg,
        data: response,
      };
    } 
    return {
      success: ifSuccess,
      message: msg,
      data: response,
      errors: error,
    };
  }
}

module.exports = new TaskController();