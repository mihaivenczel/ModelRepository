import {BASE_DEV_URL} from '../core/constants/url';
import axios from 'axios';

export const getAllModels = async () => {
  return axios
    .get(BASE_DEV_URL + '/models')
    .then(response => {
      // console.log(response.data, 'data');
      return response.data;
    })
    .catch(error => {
      // console.log(error, 'err');
      return error;
    });
};

export const getModel = async modelName => {
  return axios
    .get(BASE_DEV_URL + `/model/${modelName}`)
    .then(response => {
      // console.log(response.data, 'data');
      return response.data;
    })
    .catch(error => {
      console.log(error, 'err');
      return error;
    });
};
