import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_REGISTER,
    AUTH_REGISTER_ERROR,
    AUTH_REGISTER_SUCCESS
} from '../types';

import axiosClient from '../config/axios-client';

import { tokenAuth } from '../config/token';

// Iniciar Sesion

export function userLoginAction(user) {
    return async (dispatch) => {
        dispatch(login);

        try {
            const res = await axiosClient.post('/api-books/v1/users/login', user);

            const responseLogin = res.data;

            tokenAuth(responseLogin.token);

            dispatch(loginSuccess(responseLogin));

            // localStorage.setItem('token-readct', responseLogin.token);

            // localStorage.setItem('user-readct', JSON.stringify(responseLogin.user));

        } catch (error) {
            dispatch(loginError());
        }
    }
}

const login = () => ({
    type: AUTH_LOGIN
});

const loginSuccess = (responseLogin) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: responseLogin
});

const loginError = () => ({
    type: AUTH_LOGIN_ERROR
});


