import {BASE_DEV_URL} from '../core/constants/url';
import axios from 'axios';

export const getAllModels = async () => {
  return axios
    .get(BASE_DEV_URL + '/models')
    .then(response => {
      console.log(response.data, 'data');
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

export const getModel = async modelName => {
  return axios
    .get(BASE_DEV_URL + `/model/${modelName}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

export const deleteModel = async id => {
  return axios
    .delete(BASE_DEV_URL + `/model/delete/${id}`)
    .then(response => {
      console.log(response, 'resp');
      return response;
    })
    .catch(error => {
      console.log(error, 'err');
      return error;
    });
};
