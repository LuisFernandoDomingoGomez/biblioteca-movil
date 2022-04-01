import axiosClient from './axios-client';

export const tokenAuth = token => {
    if(token) {
        axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete axiosClient.defaults.headers.common['Authorization'];
    }
}