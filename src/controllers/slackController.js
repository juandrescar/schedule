const { WebClient } = require('@slack/web-api');
const dotenv = require('dotenv');
const _ = require('lodash');

dotenv.config();

class SlackController {

  async get(res) {
    const slackToken = process.env.SLACK_TOKEN;
    const web = new WebClient(slackToken);
    const channels = await web.conversations.list({
      token: slackToken
    }).catch(error => {
      res.status(500).json(this.notification(false, 'Error en el servidor', null, error));
    });

    const channelsNew = _.map( _.filter(channels.channels, 'is_member'), function (channel){
      if(channel.is_member){
        return {
          id: channel.id,
          name: channel.name
        };
      }
      return false;
    }) 
    res.status(200).json(this.notification(channels.ok, 'Listado de tareas encontrado', channelsNew, null));
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
      errors: error,
    };
  }

  async sendMessage(task, action){
    const slackToken = process.env.SLACK_TOKEN;
    const web = new WebClient(slackToken);

    const texto = `Se ha *${action} una Tarea* \n Titulo: ${task.title} \n Fecha: ${task.customDate} \n Descripción: ${task.description}\n`;

    const response = await web.chat.postMessage({ channel: task.slackChannel.id, text: texto })
    .catch((error) => {
      return error.data
    });
    return response;
  }
}

module.exports = new SlackController();