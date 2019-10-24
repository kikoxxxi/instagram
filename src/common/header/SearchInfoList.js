import React from 'react';
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

const SearchInfoList = (props) => {
    const userInfoList = props.userInfoList.toJS();
    const tagList = props.tagList.toJS();
    const focused = props.focused;
    const searchInfoList = [];
    const inputValue = props.inputValue;

    userInfoList.map(userItem => {
        let order = userItem.position;
        let user = userItem.user;
        let userName = user.username;
        let isVerified = user.is_verified;
        let fullName = user.full_name;
        let picUrl = user.profile_pic_url;
        return searchInfoList.push(
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

    tagList.map(tagItem => {
        let order = tagItem.position;
        let hashtag = tagItem.hashtag;
        let name = hashtag.name;
        let mediaCount = hashtag.media_count;
        return searchInfoList.push(
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

    // 使用{}在JSX内构建的一个元素集合，渲染过慢的问题
    return (
        <SearchInfoWrapper className={focused&&inputValue ? '':'hidden'}>
            <SearchInfoTriangleIcon/>
            <SearchInfoContentWrapper>
               <SearchInfoContent>
                    {searchInfoList}
                </SearchInfoContent>
            </SearchInfoContentWrapper>
        </SearchInfoWrapper>
    );
}

export default SearchInfoList;