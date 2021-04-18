import BASE_DEV_URL from '../constants/url';
import axios from 'axios';

export const getModelObjFile = async () =>
  axios
    .get(`${BASE_DEV_URL}`)
    // .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      alert(JSON.stringify(response));
      console.log(response, 'data');
      return response;
    })
    .catch(error => {
      console.log(error, 'err');
      return error;
    });
