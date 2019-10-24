import * as types from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';

const getSuggestedUsersAction=(users)=>({
    type: types.GET_SUGGESTED_USERS,
    users: fromJS(users)
});

export const getSuggestedUsers = () => {
    return dispatch => {
        axios.get('/api/suggestedUsers.json').then(res => {
            const result= res.data.edge_suggested_users.edges;
            dispatch(getSuggestedUsersAction(result));
        }).catch(err => console.log(err));
    }
};