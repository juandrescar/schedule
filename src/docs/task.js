/**
 * @api {get} api/tasks Listado de tareas
 * @apiName getTasks
 * @apiGroup Task 
 *
 * @apiSuccess {Boolean} success bandera que indica si la petición fue exitosa (true)
 * @apiSuccess {String} message Mensaje de la petición
 * @apiSuccess {Array} data Listado de tareas almacenados
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
      "success": true,
      "message": "Listado de tareas encontrado",
      "data": {
      "success": true,
      "message": "Listado de tareas encontrado",
      "data": [
        {
          "title": "Trabajo 1",
          "description": "Descripción de Trabajo 1",
          "status": true,
          "date": 2020-05-14T00:00:00.000Z,
          "finalDate": null,
          "slackChannel": "#Canal_1",
          "_id": "5eb9b5f65a3e74057547d887",
          "__v": 0,
          "created_at": "2020-05-12T22:01:02.613Z",
          "updated_at": "2020-05-12T22:01:02.613Z"
        },
        {
          "title": "Trabajo 2",
          "description": "Descripción de Trabajo 2",
          "status": true,
          "date": 2020-05-14T00:00:00.000Z,
          "finalDate": null,
          "slackChannel": "#Canal_2",
          "_id": "5eb9b617055b3c05a787be52",
          "__v": 0,
          "created_at": "2020-05-12T22:01:02.613Z",
          "updated_at": "2020-05-12T22:01:02.613Z"
        }
      ]
    }
 * @apiSuccessExample {JSON} Without records
 * HTTP/1.1 200 Success without advertisings
 * {
      "success": true,
      "message": "Listado de tareas encontrado",
      "data": []
    }
 * @apiError {String} msg Descripción del error.
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Error en el servidor",
  }
 */

 /**
 * @api {get} api/tasks/:_id Detalles de una tarea
 * @apiName getTask
 * @apiGroup Task
 *
 * @apiParam {String} _id Identificador de la tarea (GET)
 * 
 * @apiSuccess {Boolean} success bandera que indica si la petición fue exitosa (true)
 * @apiSuccess {String} message Tarea encontrad
 * @apiSuccess {Object} data Objeto de la tarea encontrada
 * 
 *
 * @apiSuccessExample {JSON} Success
 * {
    "success": true,
    "message": "Tarea encontrada",
    "data": {
      "title": "titulo 1",
      "description": "descripción de trabajo 1",
      "status": true,
      "date": "2020-05-14T00:00:00.000Z",
      "finalDate": null,
      "_id": "5ebb230c3658364240ddaf98",
      "slackChannel": "#Canal 1",
      "created_at": "2020-05-12T22:28:28.079Z",
      "updated_at": "2020-05-12T22:28:28.079Z",
      "__v": 0
    }
  }
 * @apiError {String} message Descripcón de la consulta erronea
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiError {Array} errors Array que describe posibles errores, o retorna null
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "success": false,
    "message": "Tarea no encontrada",
    "errors": null
  }
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiError {String} message Descripción del error.
 * @apiError {Object} errors describe errores del servidor o retorna null
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Error en el servidor",
    "errors": {
      "message": "Cast to ObjectId failed for value \"5eb99396f0735a6664eaca5\" at path \"_id\" for model \"task\"",
      "name": "CastError",
      "stringValue": "\"5eb99396f0735a6664eaca5\"",
      "value": "5eb99396f0735a6664eaca5",
      "path": "_id",
      "reason": {}
    }
  }
 */

/**
 * @api {post} api/tasks Guardar nueva tarea
 * @apiName saveTask
 * @apiGroup Task
 *
 * @apiParam {String} title titulo de la tarea
 * @apiParam {String} description descripción de la tarea
 * @apiParam {Boolean} status estado de la publicidad
 * @apiParam {String} slackChannel Canal de Slack asociado a la tarea
 * @apiParam {Date} date Fecha de la tarea
 *
 * @apiExample {JSON} Example JSON Request
 * {
      "status": true,
      "title": "titulo 1",
      "description": "descripción de trabajo 1",
      "date": "2020-05-14",
      "slackChannel": "#Canal 1"
    } 
 *
 * @apiSuccess {Boolean} success bandera que indica si la petición fue exitosa (true)
 * @apiSuccess {String} message Mensaje de la petición
 * @apiSuccess {Object} data Objeto de la tarea encontrada
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Se ha guardado exitosamente la nueva tarea.",
    "data": {
      "title": "titulo 1",
      "description": "descripción de trabajo 1",
      "status": true,
      "date": "2020-05-14T00:00:00.000Z",
      "finalDate": null,
      "_id": "5ebb230c3658364240ddaf98",
      "slackChannel": "#Canal 1",
      "created_at": "2020-05-12T22:28:28.079Z",
      "updated_at": "2020-05-12T22:28:28.079Z",
      "__v": 0
    }
  }
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiError {String} message Descripción del error.
 * @apiError {Array} errors Array de los errores.
 * @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
    "success": false,
    "message": "Error en parámetros",
    "errors": [
      {
        "field": "title",
        "msg": "Debe agregar un titulo"
      },
      {
        "field": "date",
        "msg": "Debe agregar una fecha"
      },
      {
        "field": "date",
        "msg": "El Formato de la fecha debe ser YYYY-MM-DD"
      },
      {
        "field": "slackChannel",
        "msg": "Debe agregar un canal de slack"
      }
    ]
  }
 *
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiError {String} message Descripción del error.
 * @apiError {Object} errors describe errores del servidor o retorna null
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Error en el servidor",
    "errors": {
      "message": "Cast to ObjectId failed for value \"5eb99396f0735a6664eaca5\" at path \"_id\" for model \"task\"",
      "name": "CastError",
      "stringValue": "\"5eb99396f0735a6664eaca5\"",
      "value": "5eb99396f0735a6664eaca5",
      "path": "_id",
      "reason": {}
    }
  }
 */

 /**
 * @api {put} api/tasks/:_id Actualizar tarea
 * @apiName updateTask
 * @apiGroup Task
 *
 * @apiParam {String} title titulo de la tarea
 * @apiParam {String} description descripción de la tarea
 * @apiParam {Boolean} status estado de la publicidad
 * @apiParam {String} slackChannel Canal de Slack asociado a la tarea
 * @apiParam {Date} date Fecha de la tarea
 *
 * @apiExample {JSON} Example JSON Request
 * {
      "title": "titulo 1",
      "description": "descripción de trabajo 1",
      "status": true,
      "date": "2020-05-14",
      "slackChannel": "#Canal 1"
    }
 *
 * @apiSuccess {Boolean} success bandera que indica si la petición fue exitosa (true)
 * @apiSuccess {String} message Mensaje de la petición
 * @apiSuccess {Object} data Objeto de la tarea encontrada
 *
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
      "success": true,
      "message": "Tarea encontrada",
      "data": {
        "title": "titulo 1",
        "description": "descripción de trabajo 1",
        "status": true,
        "date": "2020-05-14T00:00:00.000Z",
        "finalDate": null,
        "_id": "5ebb230c3658364240ddaf98",
        "slackChannel": "#Canal 1",
        "created_at": "2020-05-12T22:28:28.079Z",
        "updated_at": "2020-05-12T22:28:28.079Z",
        "__v": 0
      }
    }
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiError {String} message Descripcón de la consulta erronea
 * @apiError {Array} errors Array que describe posibles errores, o retorna null
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
    "success": false,
    "message": "Tarea no encontrada",
    "errors": null
  }
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiError {String} message Descripcón de la consulta erronea
 * @apiError {Array} errors Array que describe posibles errores, o retorna null
 * @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
      "success": false,
      "message": "Error en parámetros",
      "errors": [
        {
          "field": "title",
          "msg": "Debe agregar un titulo"
        },
        {
          "field": "date",
          "msg": "Debe agregar una fecha"
        },
        {
          "field": "date",
          "msg": "El Formato de la fecha debe ser YYYY-MM-DD"
        },
        {
          "field": "slackChannel",
          "msg": "Debe agregar un canal de slack"
        }
      ]
    }
 */

 /**
 * @api {delete} api/tasks/_id Eliminar una tarea
 * @apiName deleteTask
 * @apiGroup Task
 *
 * @apiParam {String} _id Identificador de la tarea (URL)
 *
 * @apiSuccess {Boolean} success bandera que indica si la petición fue exitosa (true)
 * @apiSuccess {String} message Mensaje de la petición
 * @apiSuccess {Object} data retorna en null
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 OK
 * {
      "success": true,
      "message": "Se ha eliminado exitosamente la tarea.",
      "data": null
  }
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiError {String} message Descripcón de la consulta erronea
 * @apiError {Array} errors Array que describe posibles errores, o retorna null
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
      "success": false,
      "message": "Tarea no encontrada.",
      "errors": null
    }
 *
 * @apiError {Boolean} success bandera que indica que hubo un fallo en la petición (false)
 * @apiError {String} message Descripción del error.
 * @apiError {Object} errors describe errores del servidor o retorna null
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Error en el servidor",
    "errors": {
      "message": "Cast to ObjectId failed for value \"5eb99396f0735a6664eaca5\" at path \"_id\" for model \"task\"",
      "name": "CastError",
      "stringValue": "\"5eb99396f0735a6664eaca5\"",
      "value": "5eb99396f0735a6664eaca5",
      "path": "_id",
      "reason": {}
    }
  }
 */