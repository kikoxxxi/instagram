import React, { Component } from 'react';
import { IconfontStyle } from '../../statics/iconfont/iconfont';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    Main,
    Section,
    SuggestionWrapper,
    Title,
    SuggestedUserWrapper,
    UserItemWrapper,
    ImgSpan,
    Img,
    UserInfoWrapper,
    UserNameWrapper,
    NameSpan,
    UserFullName,
    UserDesc,
    FollowWrapper,
    FollowButton
} from './style';

class Home extends Component {

    getSuggestedList() {
        const suggestedUsersList = this.props.suggestedUsersList.toJS();
        const userList = [];
        suggestedUsersList.map(userItem => {
            let node = userItem.node;
            let user = node.user;
            let id = user.id;
            let picUrl = user.profile_pic_url;
            let userName = user.username;
            let isVerified = user.is_verified;
            let fullName = user.full_name;
            let description = node.description;
            return userList.push(
                <UserItemWrapper key={id}>
                    <ImgSpan>
                        <Img src={picUrl}/>
                    </ImgSpan>
                    <UserInfoWrapper>
                        <UserNameWrapper>
                            <NameSpan>
                                {userName}
                            </NameSpan>
                            {isVerified ? <i className='iconfont'>&#xe602;</i> : ""}
                        </UserNameWrapper>
                        <UserFullName>
                            {fullName}
                        </UserFullName>
                        <UserDesc>
                            {description}
                        </UserDesc>
                    </UserInfoWrapper>
                    <FollowWrapper>
                        <FollowButton>
                            关注
                        </FollowButton>
                    </FollowWrapper>
                </UserItemWrapper>
            )
        })
        return userList;
    };

    render() {

        return (
            <Main>
                <Section>
                    <SuggestionWrapper>
                        <Title>
                            为你推荐
                        </Title>
                        <SuggestedUserWrapper>
                            <IconfontStyle/>
                            {this.getSuggestedList()}
                        </SuggestedUserWrapper>
                    </SuggestionWrapper>
                </Section>
            </Main>
        )
    };

    componentDidMount() {
        this.props.getSuggestedUsers();
    };
}

const mapState = state => ({
    suggestedUsersList: state.getIn(['home', 'suggestedUsersList'])
});

const mapDispatch = dispatch => ({
    getSuggestedUsers() {
        dispatch(actionCreators.getSuggestedUsers());
    },
});

export default connect(mapState, mapDispatch)(Home);