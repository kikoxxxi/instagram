import * as types from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getDetailAction = (shortcodeMedia) => ({
    type: types.GET_DETAIL,
    owner: shortcodeMedia.owner,
    location: shortcodeMedia.location,
    accessibilityCaption: shortcodeMedia.accessibility_caption,
    displayUrl: shortcodeMedia.display_url,
    displayResources: fromJS(shortcodeMedia.display_resources),
    dimensions: shortcodeMedia.dimensions,
    commentList: fromJS(shortcodeMedia.edge_media_to_parent_comment.edges),
    previewLike: fromJS(shortcodeMedia.edge_media_preview_like),
    pubTime: shortcodeMedia.taken_at_timestamp,
});

export const getDetail = (shortcode) => {
    return dispatch => {
        axios.get('/api/shortcodeMedia.json?shortcode=' + shortcode).then(res => {
            const result = res.data.data.shortcode_media;
            dispatch(getDetailAction(result));
        }).catch(e => {
            console.log(e)
        })
    }
}