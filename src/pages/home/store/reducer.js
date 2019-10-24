import * as types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    suggestedUsersList: [],
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_SUGGESTED_USERS:
            return state.set('suggestedUsersList', action.users);
        default:
            return state;
    }
};