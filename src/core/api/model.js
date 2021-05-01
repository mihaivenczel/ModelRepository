import BASE_DEV_URL from '../constants/url';
import axios from 'axios';
const headers = {
  'Content-Type': 'application/json',
};
export const getModelObjFile = async () =>
  axios
    // .get('https://whispering-gorge-69497.herokuapp.com/',   {headers})
  
    .get('https://jsonplaceholder.cypress.io/todos/1')
    .then(response => {
      alert(JSON.stringify(response));
      console.log(response, 'data');
      return response;
    })
    .catch(error => {
      console.log(error, 'err');
      return error;
    });
