import {BASE_DEV_URL} from '../core/constants/url';
import axios from 'axios';

export const getAllModels = async () => {
  console.log(BASE_DEV_URL + '/models');
  return axios
    .get(BASE_DEV_URL + '/models')
    .then(response => {
      console.log(response.data, 'data');
      return response.data;
    })
    .catch(error => {
      console.log(error, 'err');
      return error;
    });
};

export const getModel = async modelName => {
  console.log(BASE_DEV_URL + `/models/${modelName}`);
  return (
    axios
      .get('https://whispering-gorge-69497.herokuapp.com/model/chair2.obj')
      // .get(BASE_DEV_URL + `/models/${modelName}`)
      .then(response => {
        console.log(response, 'data');
        return response;
      })
      .catch(error => {
        console.log(error, 'err');
        return error;
      })
  );
};
