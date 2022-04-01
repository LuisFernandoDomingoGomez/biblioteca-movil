import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_REGISTER,
    AUTH_REGISTER_ERROR,
    AUTH_REGISTER_SUCCESS
} from '../types';

const initialState = {
    user: null,
    token: null,
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
        case AUTH_REGISTER:
            return {
                ...state,
                loading: true,
            }

        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user
            }

        case AUTH_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user
            }
        
        case AUTH_REGISTER_ERROR:
        case AUTH_LOGIN_ERROR:
            return {
                ...state,
                loading: false
            }
        

        default:
            return state;
    }
}