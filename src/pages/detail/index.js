import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfoHeader from './components/UserInfoHeader';
import Picture from './components/Picture';
import Comments from './components/Comments';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import {
    DetailWrapper,
    DialogWrapper,
    DialogContent,
    Article
} from './style/pagesStyle';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <DialogWrapper>
                    <DialogContent style={{maxWidth: '815px'}}>
                        <Article>
                            <UserInfoHeader/>
                            <Picture/>
                            <Comments/>
                        </Article>
                    </DialogContent>
                </DialogWrapper>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.shortcode);
    }
}


const mapState = state => ({

});

const mapDispatch = dispatch => ({
    getDetail(shortcode) {
        console.log('dispatch')
        dispatch(actionCreators.getDetail(shortcode));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));