/**
 * @api {get} api/slacks Slack's channel list
 * @apiName getTasks
 * @apiGroup Slack 
 *
 * @apiSuccess {Boolean} success field indicating if the request was successful (true)
 * @apiSuccess {String} message Request message
 * @apiSuccess {Array} data List of stored tasks
 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "success": true,
    "message": "Slack's Channel list found",
    "data": [
      {
        "id": "C013U963MPF",
        "name": "web-development"
      }
    ]
  }
 * @apiSuccessExample {JSON} Without records
 * HTTP/1.1 200 Success without tasks
 * {
      "success": true,
      "message": "Slack's Channel list found",
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