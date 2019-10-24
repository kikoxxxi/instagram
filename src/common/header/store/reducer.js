import * as types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    inputValue: '',
    toggle: false,
    userInfoList: [],
    tagList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SEARCH_FOCUS:
            return state.set('focused', true);
        case types.SEARCH_BLUR:
            return state.set('focused', false);
        case types.SEARCH_CHANGE:
            return state.set('inputValue', action.inputValue);
        case types.TOGGLE_HEADER:
            return state.set('toggle', action.toggle);
        case types.GET_SEARCH_LIST:
            return state.merge({
                userInfoList: action.users,
                tagList: action.hashtags
            })
        default:
            return state;
    }
};