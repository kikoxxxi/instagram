import * as types from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

axios.defaults.baseURL = 'https://kikoxxxi.github.io/instagram';
;


const getSuggestedUsersAction = (users) => ({
    type: types.GET_SUGGESTED_USER_LIST,
    users: fromJS(users)
});

const getDiscoverImgAction = (data, nextPage) => ({
    type: types.GET_DISCOVER_IMG,
    discoverList: fromJS(data.edges),
    nextPage
});

export const pageButtonShowAction = (prevBtnShow, nextBtnShow) => ({
    type: types.PAGE_BUTTON_SHOW,
    prevBtnShow,
    nextBtnShow
});


export const getSuggestedUserList = () => {
    return dispatch => {
        axios.get('/api/suggestedUsers.json').then(res => {
            const result = res.data.edge_suggested_users.edges;
            dispatch(getSuggestedUsersAction(result));
        }).catch(err => console.log(err));
    }
};

export const loadDiscoverImg = (page) => {
    return dispatch => {
        axios.get('/api/discoverMedia.json?page=' + page).then(res => {
            const result = res.data.data.user.edge_web_discover_media;
            dispatch(getDiscoverImgAction(result, page + 1));
        })
    }
}