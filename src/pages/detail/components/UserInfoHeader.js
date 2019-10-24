import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    HeaderWrapper,
    AvatarWrapper,
    Img,
    PersonalDetailsWrapper,
    NameWrapper,
    DotSpan,
    FollowButton,
    Desc
} from '../style/userInfoHeaderStyle';

class userInfoHeader extends Component {
    render() {
        const { owner } = this.props;
        const { username: userName, profile_pic_url: profilePicUrl } = owner;
        const { location } = this.props;
        return (
            <HeaderWrapper>
                <AvatarWrapper>
                    <Img alt={userName+' 的头像'} src={profilePicUrl}/>
                </AvatarWrapper>
                <PersonalDetailsWrapper>
                    <NameWrapper>
                        <Link to={userName+'/'} style={{color: '#262626'}}>  
                            {userName}
                        </Link>
                        <DotSpan>•</DotSpan>
                        <FollowButton>关注</FollowButton>
                    </NameWrapper>
                    <Desc>
                        <Link to='/' style={{color: '#262626'}}>
                            {location? location.name: ''}
                        </Link>
                    </Desc>
                </PersonalDetailsWrapper>
                <i className="iconfont">&#xe79d;</i>
            </HeaderWrapper>
        )
    }
}


const mapState = state => ({
    owner: state.getIn(['detail', 'owner']),
    location: state.getIn(['detail', 'location'])
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(userInfoHeader);