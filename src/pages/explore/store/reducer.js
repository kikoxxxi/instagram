import * as types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    prevBtnShow: false,
    nextBtnShow: true,
    suggestedUserList: [],
    discoverList: [],
    page: 0
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.PAGE_BUTTON_SHOW:
            return state.merge({ 'prevBtnShow': action.prevBtnShow, 'nextBtnShow': action.nextBtnShow });
        case types.GET_SUGGESTED_USER_LIST:
            return state.set('suggestedUserList', action.users);
        case types.GET_DISCOVER_IMG:
            return state.merge({ 'page': action.nextPage, 'discoverList': state.get('discoverList').concat(action.discoverList) });
        default:
            return state;
    }
};