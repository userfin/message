import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_ADDRESS
});

//adding token to all requests
$api.interceptors.request.use((config) => {
  config.headers &&
    (config.headers.authorization = `bearer ${localStorage.getItem('token')}`);
  return config;
});

export default $api;