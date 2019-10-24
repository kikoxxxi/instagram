import * as types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    owner: {},
    location: {},
    accessibilityCaption: '',
    displayUrl: '',
    displayResources: [],
    dimensions: {},
    commentList: [],
    previewLike: {},
    pubTime: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_DETAIL:
            return state.merge({
                owner: action.owner,
                location: action.location,
                accessibilityCaption: action.accessibilityCaption,
                displayUrl: action.displayUrl,
                displayResources: action.displayResources,
                dimensions: action.dimensions,
                commentList: action.commentList,
                previewLike: action.previewLike,
                pubTime: action.pubTime
            });
        default:
            return state;
    }
};