define({ "api": [
  {
    "type": "delete",
    "url": "api/tasks/_id",
    "title": "Eliminar una tarea",
    "name": "deleteTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identificador de la tarea (URL)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica si la petición fue exitosa (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la petición</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>retorna en null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n      \"success\": true,\n      \"message\": \"Se ha eliminado exitosamente la tarea.\",\n      \"data\": null\n    }",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica que hubo un fallo en la petición (false)</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Descripcón de la consulta erronea</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>Array que describe posibles errores, o retorna null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found element",
          "content": "HTTP/1.1 404 Not found\n{\n      \"success\": false,\n      \"message\": \"Tarea no encontrada.\",\n      \"errors\": null\n    }",
          "type": "JSON"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Error en el servidor\",\n    \"errors\": {\n      \"message\": \"Cast to ObjectId failed for value \\\"5eb99396f0735a6664eaca5\\\" at path \\\"_id\\\" for model \\\"task\\\"\",\n      \"name\": \"CastError\",\n      \"stringValue\": \"\\\"5eb99396f0735a6664eaca5\\\"\",\n      \"value\": \"5eb99396f0735a6664eaca5\",\n      \"path\": \"_id\",\n      \"reason\": {}\n    }\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "api/tasks/:_id",
    "title": "Detalles de una tarea",
    "name": "getTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identificador de la tarea (GET)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica si la petición fue exitosa (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Tarea encontrad</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto de la tarea encontrada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"success\": true,\n    \"message\": \"Tarea encontrada\",\n    \"data\": {\n      \"title\": \"titulo 1\",\n      \"description\": \"descripción de trabajo 1\",\n      \"status\": true,\n      \"date\": \"2020-05-14T00:00:00.000Z\",\n      \"finalDate\": null,\n      \"_id\": \"5ebb230c3658364240ddaf98\",\n      \"slackChannel\": \"#Canal 1\",\n      \"created_at\": \"2020-05-12T22:28:28.079Z\",\n      \"updated_at\": \"2020-05-12T22:28:28.079Z\",\n      \"__v\": 0\n    }\n  }",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Descripcón de la consulta erronea</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica que hubo un fallo en la petición (false)</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>Array que describe posibles errores, o retorna null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Without records",
          "content": "HTTP/1.1 404 Not found\n{\n    \"success\": false,\n    \"message\": \"Tarea no encontrada\",\n    \"errors\": null\n  }",
          "type": "JSON"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Error en el servidor\",\n    \"errors\": {\n      \"message\": \"Cast to ObjectId failed for value \\\"5eb99396f0735a6664eaca5\\\" at path \\\"_id\\\" for model \\\"task\\\"\",\n      \"name\": \"CastError\",\n      \"stringValue\": \"\\\"5eb99396f0735a6664eaca5\\\"\",\n      \"value\": \"5eb99396f0735a6664eaca5\",\n      \"path\": \"_id\",\n      \"reason\": {}\n    }\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "api/tasks",
    "title": "Listado de tareas",
    "name": "getTasks",
    "group": "Task",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica si la petición fue exitosa (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la petición</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Listado de tareas almacenados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n      \"success\": true,\n      \"message\": \"Listado de tareas encontrado\",\n      \"data\": {\n      \"success\": true,\n      \"message\": \"Listado de tareas encontrado\",\n      \"data\": [\n        {\n          \"title\": \"Trabajo 1\",\n          \"description\": \"Descripción de Trabajo 1\",\n          \"status\": true,\n          \"date\": 2020-05-14T00:00:00.000Z,\n          \"finalDate\": null,\n          \"slackChannel\": \"#Canal_1\",\n          \"_id\": \"5eb9b5f65a3e74057547d887\",\n          \"__v\": 0,\n          \"created_at\": \"2020-05-12T22:01:02.613Z\",\n          \"updated_at\": \"2020-05-12T22:01:02.613Z\"\n        },\n        {\n          \"title\": \"Trabajo 2\",\n          \"description\": \"Descripción de Trabajo 2\",\n          \"status\": true,\n          \"date\": 2020-05-14T00:00:00.000Z,\n          \"finalDate\": null,\n          \"slackChannel\": \"#Canal_2\",\n          \"_id\": \"5eb9b617055b3c05a787be52\",\n          \"__v\": 0,\n          \"created_at\": \"2020-05-12T22:01:02.613Z\",\n          \"updated_at\": \"2020-05-12T22:01:02.613Z\"\n        }\n      ]\n    }",
          "type": "json"
        },
        {
          "title": "Without records",
          "content": "HTTP/1.1 200 Success without advertisings\n{\n      \"success\": true,\n      \"message\": \"Listado de tareas encontrado\",\n      \"data\": []\n    }",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Descripción del error.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica que hubo un fallo en la petición (false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found element",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Error en el servidor\",\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "api/tasks",
    "title": "Guardar nueva tarea",
    "name": "saveTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>titulo de la tarea</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>descripción de la tarea</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>estado de la publicidad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slackChannel",
            "description": "<p>Canal de Slack asociado a la tarea</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la tarea</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n      \"status\": true,\n      \"title\": \"titulo 1\",\n      \"description\": \"descripción de trabajo 1\",\n      \"date\": \"2020-05-14\",\n      \"slackChannel\": \"#Canal 1\"\n    }",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica si la petición fue exitosa (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la petición</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto de la tarea encontrada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Se ha guardado exitosamente la nueva tarea.\",\n    \"data\": {\n      \"title\": \"titulo 1\",\n      \"description\": \"descripción de trabajo 1\",\n      \"status\": true,\n      \"date\": \"2020-05-14T00:00:00.000Z\",\n      \"finalDate\": null,\n      \"_id\": \"5ebb230c3658364240ddaf98\",\n      \"slackChannel\": \"#Canal 1\",\n      \"created_at\": \"2020-05-12T22:28:28.079Z\",\n      \"updated_at\": \"2020-05-12T22:28:28.079Z\",\n      \"__v\": 0\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica que hubo un fallo en la petición (false)</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Descripción del error.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Array de los errores.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error en los parametros",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Error en parámetros\",\n    \"errors\": [\n      \"Debe agregar un titulo\",\n      \"Debe agregar un canal de slack\"\n    ]\n  }",
          "type": "JSON"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"success\": false,\n    \"message\": \"Error en el servidor\",\n    \"errors\": {\n      \"message\": \"Cast to ObjectId failed for value \\\"5eb99396f0735a6664eaca5\\\" at path \\\"_id\\\" for model \\\"task\\\"\",\n      \"name\": \"CastError\",\n      \"stringValue\": \"\\\"5eb99396f0735a6664eaca5\\\"\",\n      \"value\": \"5eb99396f0735a6664eaca5\",\n      \"path\": \"_id\",\n      \"reason\": {}\n    }\n  }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "put",
    "url": "api/tasks/:_id",
    "title": "Actualizar tarea",
    "name": "updateTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>titulo de la tarea</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>descripción de la tarea</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>estado de la publicidad</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slackChannel",
            "description": "<p>Canal de Slack asociado a la tarea</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Fecha de la tarea</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example JSON Request",
        "content": "{\n      \"title\": \"titulo 1\",\n      \"description\": \"descripción de trabajo 1\",\n      \"status\": true,\n      \"date\": \"2020-05-14\",\n      \"slackChannel\": \"#Canal 1\"\n    }",
        "type": "JSON"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica si la petición fue exitosa (true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de la petición</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto de la tarea encontrada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success with set price",
          "content": "HTTP/1.1 200 OK\n{\n      \"success\": true,\n      \"message\": \"Tarea encontrada\",\n      \"data\": {\n        \"title\": \"titulo 1\",\n        \"description\": \"descripción de trabajo 1\",\n        \"status\": true,\n        \"date\": \"2020-05-14T00:00:00.000Z\",\n        \"finalDate\": null,\n        \"_id\": \"5ebb230c3658364240ddaf98\",\n        \"slackChannel\": \"#Canal 1\",\n        \"created_at\": \"2020-05-12T22:28:28.079Z\",\n        \"updated_at\": \"2020-05-12T22:28:28.079Z\",\n        \"__v\": 0\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>bandera que indica que hubo un fallo en la petición (false)</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Descripcón de la consulta erronea</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "errors",
            "description": "<p>Array que describe posibles errores, o retorna null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found element",
          "content": "HTTP/1.1 404 Not found\n{\n    \"success\": false,\n    \"message\": \"Tarea no encontrada\",\n    \"errors\": null\n  }",
          "type": "JSON"
        },
        {
          "title": "Error principal params",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n      \"success\": false,\n      \"message\": \"Error en parámetros\",\n      \"errors\": [\n        \"Debe agregar una fecha\",\n        \"El Formato de la fecha debe ser YYYY-MM-DD\",\n        \"Debe agregar un canal de slack\"\n      ]\n    }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/docs/task.js",
    "groupTitle": "Task"
  }
] });