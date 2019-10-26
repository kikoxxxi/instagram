import * as types from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

axios.defaults.baseURL = 'https://kikoxxxi.github.io/instagram';

export const searchFocusAction = () => ({
    type: types.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
    type: types.SEARCH_BLUR
});

export const searchChangeAction = (inputValue) => ({
    type: types.SEARCH_CHANGE,
    inputValue
});

export const getSearchListAction = (data) => ({
    type: types.GET_SEARCH_LIST,
    users: fromJS(data.users),
    hashtags: fromJS(data.hashtags)
});

export const toggleHeaderAction = (toggle) => ({
    type: types.TOGGLE_HEADER,
    toggle
});

export const getSearchList = (value) => {
    return (dispatch) => {
        console.log(value);
        dispatch(searchChangeAction(value));
        if (value.length) {
            axios.get('/api/headerSearchInfo.json?query=' + value).then(res => {
                const result = res.data;
                console.log(result);
                dispatch(getSearchListAction(result));
            }).catch(error => {
                console.log(error);
            });
        }
    }
    // if (cancel != undefined) {
    //     cancel();
    // }
    // return dispatch => {
    //     axios.get('/api/headerSearchInfo.json', {
    //             cancelToken: new CancelToken(function executor(c) {
    //                 // An executor function receives a cancel function as a parameter
    //                 cancel = c;
    //             }),
    //             params: {
    //                 query: value
    //             }
    //         })
    //         .then(response => {
    //             return response.data.response;
    //         })
    //         .catch(error => {
    //             const result = error.response;
    //             return Promise.reject(result);
    //         });
    //     cancel();
    // }
};