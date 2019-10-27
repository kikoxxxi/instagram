import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    SearchInfoWrapper,
    SearchInfoContent,
    SearchInfoTriangleIcon,
    SearchInfoContentWrapper,
    SearchInfoItemWrapper,
    SearchInfoItemContent,
    ImgSpan,
    Img,
    InfoTextWrapper,
    InfoNameWrapper,
    NameSpan,
    InfoDesc,
    PostsNumber
} from './style';

class SearchInfoList extends PureComponent {
    getSearchInfoList() {
        const userInfoList = this.props.userInfoList.toJS();
        const tagList = this.props.tagList.toJS();
        const searchInfoList = [];

        userInfoList.forEach(userItem => {
            const { position: order, user } = userItem;
            const { username: userName, is_verified: isVerified, full_name: fullName, profile_pic_url: picUrl } = user;

            searchInfoList.push(
                <SearchInfoItemWrapper order={order} key={order}>
                    <SearchInfoItemContent>
                        <ImgSpan>
                            <Img src={picUrl}/>
                        </ImgSpan>
                        <InfoTextWrapper>
                            <InfoNameWrapper>
                                <NameSpan>
                                    {userName}
                                </NameSpan>
                                {isVerified ? <i className='iconfont'>&#xe602;</i> : ""}
                            </InfoNameWrapper>
                            <InfoDesc>
                                {fullName}
                            </InfoDesc>
                        </InfoTextWrapper>
                    </SearchInfoItemContent>
                </SearchInfoItemWrapper>
            );
        });

        tagList.forEach(tagItem => {
            const { position: order, hashtag } = tagItem;
            const { name, media_count: mediaCount } = hashtag;
            searchInfoList.push(
                <SearchInfoItemWrapper order={order} key={order}>
                    <SearchInfoItemContent>
                        <i className='iconfont '>&#xe607;</i>
                        <InfoTextWrapper>
                            <InfoNameWrapper>
                                <NameSpan>
                                    {name}
                                </NameSpan>
                            </InfoNameWrapper>
                            <InfoDesc>
                                <PostsNumber>{mediaCount}</PostsNumber> 帖子
                            </InfoDesc>
                        </InfoTextWrapper>
                    </SearchInfoItemContent>
                </SearchInfoItemWrapper>
            );
        });
        return searchInfoList;
    };


    render() {
        const { focused, inputValue, userInfoList } = this.props;

        return (
            <SearchInfoWrapper className={focused&&inputValue&&userInfoList.size ? '':'hidden'}>
                <SearchInfoTriangleIcon/>
                <SearchInfoContentWrapper>
                   <SearchInfoContent>
                        {this.getSearchInfoList()}
                    </SearchInfoContent>
                </SearchInfoContentWrapper>
            </SearchInfoWrapper>
        );
    };
}

const mapState = (state) => ({
    focused: state.getIn(['header', 'focused']),
    inputValue: state.getIn(['header', 'inputValue']),
    userInfoList: state.getIn(['header', 'userInfoList']),
    tagList: state.getIn(['header', 'tagList'])
});

export default connect(mapState, null)(SearchInfoList);