import axios from 'axios';
import { apiUrl } from '../constants/apiConstants';

export function getApiData () {
return axios.get(apiUrl)
  .then(function (response) {
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });

}