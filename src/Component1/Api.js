
import axios from 'axios'


const Api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

Api.interceptors.request.use(function (config) {
    // Do something before request is sent
    document.getElementById('overlay').style.display = 'block';
    Object.assign(config.headers, { test: '1212' })
    console.log('[Api-req]', config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


// Add a response interceptor
Api.interceptors.response.use(function (response) {
    document.getElementById('overlay').style.display = 'none';
    Object.assign(response, { data: { list: response.data, message: 'user list' } })
    console.log('[Api-res]', response)
    return response;
}, function (error) {

    return Promise.reject(error);
});



export default Api