const constants = {
  status: {
    '2xx': [
      200,
      201,
      202,
      203,
      204
    ],
    '4xx': [
      400,
      401,
      402,
      403,
      404
    ],
    '5xx': [
      500,
      501,
      502,
      503,
      504
    ]
  }
}

const post_methode = 'POST';
const get_methode = 'GET';
const delete_methode = 'DELETE';
const patch_methode = 'PATCH';
const CORS = 'cors';
const _server_handle = '_server_handle'
const _local_handle = '_local_handle'

export {
  constants,
  post_methode,
  get_methode,
  delete_methode,
  patch_methode,
  CORS,
  _server_handle,
  _local_handle
}