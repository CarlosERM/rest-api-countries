import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  timeout: 2000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

axiosClient.defaults.withCredentials = true;

export function getRequest(URL: string) {
  return axiosClient.get(`/${URL}`).then((response) => {
    return response.data;
  });
}

export function postRequest(URL: string, data: object) {
  return axiosClient.post(`/${URL}`, data).then((response) => {
    return response;
  });
}

export function patchRequest(URL: string, data: object) {
  return axiosClient.patch(`/${URL}`, data).then((response) => {
    return response;
  });
}

export function deleteRequest(URL: string) {
  return axiosClient.delete(`/${URL}`).then((response) => {
    return response;
  });
}
