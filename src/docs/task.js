/**
 * @api {get} api/tasks Task list
 * @apiName getTasks
 * @apiGroup Task 
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Array} data List of stored tasks
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Tasks list found",
    "data": [
      {
        "title": "work 1",
        "description": "description work 1",
        "status": false,
        "date": "2020-05-20T14:59:22.233Z",
        "finalDate": null,
        "_id": "5ec549c6b6b9717608003e70",
        "slackChannel": {
          "id": "C013U963MPF",
          "name": "web-development"
        },
        "created_at": "2020-05-20T15:16:22.919Z",
        "updated_at": "2020-05-20T15:16:22.919Z",
        "__v": 0,
        "customDate": "2020/05/20",
        "id": "5ec549c6b6b9717608003e70"
      },
      {
        "title": "work 2",
        "description": "description work 2",
        "status": false,
        "date": "2020-05-20T14:59:22.233Z",
        "finalDate": null,
        "_id": "5ec549d0b6b9717608003e71",
        "slackChannel": {
          "id": "C013U963MPF",
          "name": "web-development"
        },
        "created_at": "2020-05-20T15:16:32.963Z",
        "updated_at": "2020-05-20T15:16:32.963Z",
        "__v": 0,
        "customDate": "2020/05/20",
        "id": "5ec549d0b6b9717608003e71"
      }
    ]
  }
 * @apiSuccessExample {JSON} Without records
 * HTTP/1.1 200 Success without tasks
 * {
      "success": true,
      "message": "Tasks list found",
      "data": []
    }
 * @apiError {String} msg Error description.
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
    "success": false,
    "message": "Error en el servidor",
  }
 */

 /**
 * @api {get} api/tasks/:_id Show Details of a task
 * @apiName getTask
 * @apiGroup Task
 *
 * @apiParam {String} _id Task identifier (GET)
 * 
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Task found
 * @apiSuccess {Object} data Object of found task
 * 
 *
 * @apiSuccessExample {JSON} Success
 * {
      "success": true,
      "message": "Task found",
      "data": {
        "title": "work 1",
        "description": "description work 1",
        "status": false,
        "date": "2020-05-20T14:59:22.233Z",
        "finalDate": null,
        "_id": "5ec549c6b6b9717608003e70",
        "slackChannel": {
          "id": "C013U963MPF",
          "name": "web-development"
        },
        "created_at": "2020-05-20T15:16:22.919Z",
        "updated_at": "2020-05-20T15:16:22.919Z",
        "__v": 0,
        "customDate": "2020/05/20",
        "id": "5ec549c6b6b9717608003e70"
      }
    }
 * @apiError {String} message Description of the wrong query
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {Array} errors Array that describes possible errors, or returns null
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
      "success": false,
      "message": "Task not found",
      "data": null,
      "errors": null
    }
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Array} errors Array that describes possible errors, or returns null
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
      "success": false,
      "message": "Server error",
      "data": null,
      "errors": null
    }
 */

/**
 * @api {post} api/tasks Save new task
 * @apiName saveTask
 * @apiGroup Task
 *
 * @apiParam {String} title Task title
 * @apiParam {String} description Task description
 * @apiParam {Boolean} status Task status
 * @apiParam {Object} slackChannel Slack channel associated with the task
 * @apiParam {Date} date Task date
 *
 * @apiExample {JSON} Example JSON Request
 * {
      "title": "Task title",
      "slackChannel": {"id": "C013U963MPF", "name": "web-development"},
      "date": "2020-05-20T15:16:34.467Z",
      "description": "description Task"
    } 
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Object} data Object of found task
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
      "success": true,
      "message": "The new task has been successfully saved",
      "data": {
        "title": "Task title",
        "description": "description Task",
        "status": false,
        "date": "2020-05-20T15:16:34.467Z",
        "finalDate": null,
        "_id": "5ec54f058476987984b70ff5",
        "slackChannel": {
          "id": "C013U963MPF",
          "name": "web-development"
        },
        "created_at": "2020-05-20T15:38:45.581Z",
        "updated_at": "2020-05-20T15:38:45.581Z",
        "__v": 0,
        "customDate": "2020/05/20",
        "id": "5ec54f058476987984b70ff5"
      }
    }
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Array} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
      "success": false,
      "message": "Parameter error",
      "errors": [
        {
          "field": "title",
          "msg": "Title is required"
        },
        {
          "field": "date",
          "msg": "Date is required"
        },
        {
          "field": "date",
          "msg": "The date format must be YYYY-MM-DD"
        },
        {
          "field": "slackChannel",
          "msg": "Slack's channel  is required"
        }
      ]
    }
 *
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Object} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
      "success": false,
      "message": "Server error",
      "data": null,
      "errors": null
    }
 */

 /**
 * @api {put} api/tasks/:_id Update task
 * @apiName updateTask
 * @apiGroup Task
 *
 * @apiParam {String} _id Task identifier (GET)
 * @apiParam {String} title Task title
 * @apiParam {String} description Task description
 * @apiParam {Boolean} status Task status
 * @apiParam {Object} slackChannel Slack channel associated with the task
 * @apiParam {Date} date Task date
 *
 * @apiExample {JSON} Example JSON Request
 * {
      "title": "Task title modify",
      "slackChannel": {"id": "C013U963MPF", "name": "web-development"},
      "date": "2020-05-20T15:16:34.467Z",
      "description": "description Task modify"
    }
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Object} data Object of found task
 *
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
      "success": true,
      "message": "The task has been successfully updated",
      "data": {
        "title": "Task title modify",
        "description": "description Task modify",
        "status": false,
        "date": "2020-05-20T15:16:34.467Z",
        "finalDate": null,
        "_id": "5ec549c6b6b9717608003e70",
        "slackChannel": {
          "id": "C013U963MPF",
          "name": "web-development"
        },
        "created_at": "2020-05-20T15:16:22.919Z",
        "updated_at": "2020-05-20T15:51:36.567Z",
        "__v": 0,
        "customDate": "2020/05/20",
        "id": "5ec549c6b6b9717608003e70"
      }
    }
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Array} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
      "success": false,
      "message": "Task not found to modify",
      "data": null,
      "errors": null
    }
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Array} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Unprocessable Entity
 * HTTP/1.1 422 Unprocessable Entity
 * {
      "success": false,
      "message": "Parameter error",
      "errors": [
        {
          "field": "title",
          "msg": "Title is required"
        },
        {
          "field": "date",
          "msg": "Date is required"
        },
        {
          "field": "date",
          "msg": "The date format must be YYYY-MM-DD"
        },
        {
          "field": "slackChannel",
          "msg": "Slack's channel  is required"
        }
      ]
    }
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Object} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
      "success": false,
      "message": "Server error",
      "data": null,
      "errors": null
    }
 */

 /**
 * @api {delete} api/tasks/_id Delete task
 * @apiName deleteTask
 * @apiGroup Task
 *
 * @apiParam {String} _id Task identifier (GET)
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Object} data returns null
 * @apiSuccessExample {JSON} Success
 * HTTP/1.1 200 OK
 * {
      "success": true,
      "message": "The task has been successfully removed",
      "data": null
    }
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Array} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
      "success": false,
      "message": "Task not found",
      "data": null,
      "errors": null
    }
 *
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Object} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
      "success": false,
      "message": "Server error",
      "data": null,
      "errors": null
    }
 */

 /**
 * @api {post} api/tasks/:_id/status Toggle a task completed
 * @apiName toggleTask
 * @apiGroup Task
 *
 * @apiParam {String} _id Task identifier (GET)
 * @apiParam {String} title Task title
 * @apiParam {String} description Task description
 * @apiParam {Boolean} status Task status (true) completed, (false) reopened
 * @apiParam {Object} slackChannel Slack channel associated with the task
 * @apiParam {Date} date Task date
 *
 * @apiExample {JSON} Example JSON Request
 * {
      "title": "Task title modify",
      "slackChannel": {"id": "C013U963MPF", "name": "web-development"},
      "date": "2020-05-20T15:16:34.467Z",
      "description": "description Task modify"
      "status": true
    }
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Object} data Object of found updated
 *
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
      "success": true,
      "message": "The task has been successfully completed",
      "data": {
        "title": "Task title modify",
        "description": "description Task modify",
        "status": true,
        "date": "2020-05-20T15:16:34.467Z",
        "finalDate": null,
        "_id": "5ec549d0b6b9717608003e71",
        "slackChannel": {
          "id": "C013U963MPF",
          "name": "web-development"
        },
        "created_at": "2020-05-20T15:16:32.963Z",
        "updated_at": "2020-05-20T16:08:47.050Z",
        "__v": 0,
        "customDate": "2020/05/20",
        "id": "5ec549d0b6b9717608003e71"
      }
    }
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Array} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Not found
 * HTTP/1.1 404 Not found
 * {
      "success": false,
      "message": "Task not found to modify",
      "data": null,
      "errors": null
    }
 * @apiError {Boolean} success field indicating that there was a failure in the request (false)
 * @apiError {String} message Error description.
 * @apiError {Object} errors Array that describes possible errors, or returns null.
 * @apiErrorExample {JSON} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 * {
      "success": false,
      "message": "Server error",
      "data": null,
      "errors": null
    }
 */