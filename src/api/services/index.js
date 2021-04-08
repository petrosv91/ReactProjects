import { isObjEmpty } from '../../utils';

const { default: Axios } = require('axios');
const { ipcRenderer } = window.require('electron');

const port = ipcRenderer.sendSync('request-port');
console.log(`Client listen on port ${port}`);

const API = `http://localhost:${port}/api`;

async function baseGetService(params) {
  const result = await Axios.post(API, params);
  const data = result.data;
  if (!data.success) {
    if (isObjEmpty(data.message)) {
      throw new Error('Network Error');
    }
    throw new Error(data.message);
  }
  return data;
}

export { baseGetService };