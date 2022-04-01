import {
    GET_BOOKS,
    GET_BOOKS_ERROR,
    GET_BOOKS_SUCCESS,
} from '../types';

const initialState = {
    topSixBooksSold: [],
    topSixPopularAdded: [],
    books: [],
    bookSelected: null,
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {

        case GET_BOOKS:
            return {
                ...state,
                loading: true
            }

        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false
            }

        case GET_BOOKS_ERROR:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}