const Task = require('../model/task');
const SlackController = require('../controllers/slackController');

class TaskController {
  async get(res) {
    const tasks = await Task.find().catch(error => {
      res.status(500).json(this.notification(false, 'Server error', null, []));
    });

    res.status(200).json(this.notification(true, 'Tasks list found', tasks, null));
  }

  async save(req, res) {
    const task = new Task(req);
    await task.save().catch(error => {
      res.status(500).json(this.notification(false, 'Server error', null, null));
    });
    
    const messageSlack = await SlackController.sendMessage(task, 'Created');
    if(!messageSlack.ok)
    {
      res.status(200).json(this.notification(messageSlack.ok, 'Error with Slack API connection', task, [{msg: messageSlack.error}]));
    }
    res.status(200).json(this.notification(true, 'The new task has been successfully saved', task, null));
  }

  async findOne(id, res) {
    const task = await Task.findById(id)
    .catch( error => {
      res.status(500).json(this.notification(false, 'Server error', null, null));
    });

    if(task){
      res.status(200).json(this.notification(true, 'Task found', task, null));
    } else {
      res.status(404).json(this.notification(false, 'Task not found', task, null));
    }
    
  }

  async update(req, res, id) {
    const task = await Task.findOneAndUpdate({_id: id}, req.body, {new: true})
    .catch((error) => {
      res.status(500).json(this.notification(false, 'Server error', null, null));
    });
    if(task){
      const messageSlack = await SlackController.sendMessage(task, 'Updated');
      if(!messageSlack.ok)
      {
        res.status(200).json(this.notification(messageSlack.ok, 'Error with Slack API connection', task, [{msg: messageSlack.error}]));
      }
      res.status(200).json(this.notification(true, 'The task has been successfully updated', task, null));
    } else {
      res.status(404).json(this.notification(false, 'Task not found to modify.', task, null));
    }
  }

  async toggleTask(req, res, id) {
    const task = await Task.findOneAndUpdate({_id: id}, req.body, {new: true})
    .catch((error) => {
      res.status(500).json(this.notification(false, 'Server error', null, null));
    });
    if(task){
      const action = task.status ? 'Completed' :  'Reopened'
      const messageSlack = await SlackController.sendMessage(task, action);
      if(!messageSlack.ok)
      {
        res.status(200).json(this.notification(messageSlack.ok, 'Error with Slack API connection', task, [{msg: messageSlack.error}]));
      }
      let text;
      if(task.status) {
        text = 'The task has been successfully completed';
      } else {
        text = 'The task has been reopened';
      }
      res.status(200).json(this.notification(true, text, task, null));
    } else {
      res.status(404).json(this.notification(false, 'Task not found to modify', task, null));
    }
  }

  async delete(id, res) {
    const task = await Task.findByIdAndRemove(id)
    .catch((error) => {
      res.status(500).json(this.notification(false, 'Server error', null, error));
    });
    if(task){
      const messageSlack = await SlackController.sendMessage(task, 'Removed');
      if(!messageSlack.ok)
      {
        res.status(200).json(this.notification(messageSlack.ok, 'Error with Slack API connection', null, [{msg: messageSlack.error}]));
      }
      res.status(200).json(this.notification(true, 'The task has been successfully removed', null, null));
    } else {
      res.status(404).json(this.notification(false, 'Task not found', task, null));
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