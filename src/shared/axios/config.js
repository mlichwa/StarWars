import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api/';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';


axios.interceptors.request.use(request => {
    // console.log("AXIOS REQUEST",request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // console.log("AXIOS RESPONSE", response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default axios;