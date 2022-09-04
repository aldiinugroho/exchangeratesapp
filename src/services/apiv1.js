import { get_methode, _local_handle } from '../commons/constants';
import { checkobjectorno, status2xx, status4xx, status5xx } from '../utils';
import { fetchMethod, responseparser } from './serviceshelper';

let setheaders = { 
  'Content-Type': 'application/json'
}

const exchangeKey = "F4ucWihivm8CAOuZ89MMxsZE0iC04K5r"

const testapi = async (params) => {
  const URL = `https://api.apilayer.com/exchangerates_data/latest?symbols=${params}&base=USD`;
  console.log('API URL',URL);
  const header = {
    ...setheaders,
    "apikey": exchangeKey
  }
  const config = {
    method: get_methode,
    headers: header,
    timeout: 30000
  }
  try {
    const response = await fetchMethod(URL,config)
    return response
  } catch (err) {
    return responseparser(err,_local_handle)
  }
}

const getlistcurrencies = async () => {
  const URL = `https://api.apilayer.com/exchangerates_data/symbols`;
  console.log('API URL',URL);
  const header = {
    ...setheaders,
    "apikey": exchangeKey
  }
  const config = {
    method: get_methode,
    headers: header,
    timeout: 30000
  }
  try {
    const response = await fetchMethod(URL,config)
    return response
  } catch (err) {
    return responseparser(err,_local_handle)
  }
}

export {
  testapi,
  getlistcurrencies
};