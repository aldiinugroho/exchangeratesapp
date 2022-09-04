import { _local_handle, _server_handle } from "../commons/constants";
import { status2xx, status4xx, status5xx } from "../utils";

export const responseparser = async (response,message) => {
  let template = { data: null, status: 0, message: 'unsuccesfull', message2: 'unsuccesfull' }
  try {
    if (message === _local_handle) {
      if (response.name === 'AbortError') {
        throw 'timeout'
      } else {
        throw response.message
      }
    }

    if (message === _server_handle) {
      const res_raw = await response.json()
      console.log('_server_handle'+' response ',res_raw);
      const res_data = res_raw
      const res_status = response.status
      if (status2xx(res_status)) {
        template.data = res_data
        template.status = res_status
        template.message = 'succesfull'
        template.message2 = 'succesfull'
        return template
      } else if (status4xx(res_status)) {
        template.status = res_status
        template.message = 'unsuccesfull'
        template.message2 = `failed ${res_status}`
        return template
      } else if (status5xx(res_status)) {
        template.status = res_status
        template.message = 'unsuccesfull'
        template.message2 = `failed ${res_status}`
        return template
      } else {
        throw 'unknown defined status'
      }
    }
  } catch (error) {
    // console.log('responseparser',error);
    if (typeof error === 'string') {
      if (error === 'timeout') {
        template.status = -1
        template.message = 'unsuccesfull'
        template.message2 = 'timeout'
        return template
      } else {
        template.message = 'unsuccesfull'
        template.message2 = error
        return template
      }
    } else {
      return template
    }
  }
}

export const fetchMethod = async (resource, options = {}) => {
  try {
    const { 
      timeout = 5000,
    } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const responserawfromserver = await fetch(resource, {
      ...options,
      signal: controller.signal,
      headers: {
        ...options.headers
      }
    });
    clearTimeout(id);
    const response = await responseparser(responserawfromserver,_server_handle)
    // console.log('fetchMethod-response',response);
    // console.log('fetchMethod-option',options);
    return response
  } catch (err) {
    return responseparser(err,_local_handle)
  }
}