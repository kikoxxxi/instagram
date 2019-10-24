import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import {
    SuggestedUsersWrapper,
    Title,
    UserWrapper,
    BlurBorderWrapper,
    UserContent,
    TransitionDiv,
    UserListUl,
    UserItemLi,
    UserItemWrapper,
    UserItemContent,
    ImgWrapperA,
    Img,
    NameWrapperA,
    Name,
    Desc,
    FollowButton,
    PrevButton,
    NextButton
} from '../style/suggestedUserListStyle';


class SuggestedUserList extends Component {
    getUserItemList() {
        const suggestedUserList = this.props.suggestedUserList.toJS();
        const userItemList = [];
        suggestedUserList.map(userItem => {
            let node = userItem.node;
            let user = node.user;
            let id = user.id;
            let picUrl = user.profile_pic_url;
            let userName = user.username;
            let isVerified = user.is_verified;
            let fullName = user.full_name;
            let description = node.description;
            return userItemList.push(
                <UserItemLi key={id} style={{opacity: 1, width: 200}}>
                    <UserItemWrapper style={{marginLeft: 24, width: 176}}>
                        <UserItemContent>
                            <ImgWrapperA style={{width: 56, height: 56}}>
                                <Img alt={userName+'的头像'} src={picUrl}/>
                            </ImgWrapperA>
                            <NameWrapperA title={fullName} href="/beingsalmankhan/">
                                <Name>{userName}</Name>
                                <i className={isVerified ? "iconfont" : ""} title="已验证">&#xe602;</i>
                            </NameWrapperA>
                            <Desc style={{height: 28}}>{description}</Desc>
                            <FollowButton type="button">关注</FollowButton>
                        </UserItemContent>
                    </UserItemWrapper>
                </UserItemLi>
            )
        })
        return userItemList;
    }

    render() {
        const { prevBtnShow, nextBtnShow, handleReturnPrev, handleTurnNext } = this.props;
        return (
            <SuggestedUsersWrapper>
                <Title>
                    发现用户    
                    <Link to='/'>
                        查看全部
                    </Link>
                </Title>
                <UserWrapper>
                    <BlurBorderWrapper>
                        <UserContent>
                            <TransitionDiv 
                            ref={transitionDiv=>this.transitionDiv=transitionDiv}
                            style={{transitionDuration: '0', transform: 'translateX(0)'}}>
                                <UserListUl>
                                    {this.getUserItemList()}
                                </UserListUl>
                            </TransitionDiv>
                        </UserContent>
                        <PrevButton 
                        className={prevBtnShow ? '' : 'hidden'}
                        onClick={()=>{handleReturnPrev(this.transitionDiv)}}>
                            <i className='iconfont'>&#xe62c;</i>
                        </PrevButton>
                        <NextButton 
                        className={nextBtnShow ? '' : 'hidden'}
                        onClick={()=>{handleTurnNext(this.transitionDiv)}}>
                            <i className='iconfont'>&#xe600;</i>
                        </NextButton>
                    </BlurBorderWrapper>
                </UserWrapper>
            </SuggestedUsersWrapper>

        )
    };

    componentDidMount() {
        this.props.getSuggestedUserList();
    };
};

const getOriginTransformX = transitionDiv => {
    let originTransformX = transitionDiv.style.transform.replace(/[^-\d]/ig, '');
    if (originTransformX) {
        originTransformX = parseInt(originTransformX, 10);
    } else {
        originTransformX = 0;
    }
    return originTransformX;
}

const mapState = (state) => ({
    suggestedUserList: state.getIn(['explore', 'suggestedUserList']),
    prevBtnShow: state.getIn(['explore', 'prevBtnShow']),
    nextBtnShow: state.getIn(['explore', 'nextBtnShow'])
});

const mapDispatch = (dispatch) => ({
    handleReturnPrev(transitionDiv) {
        let originTransformX = getOriginTransformX(transitionDiv);
        if (originTransformX < 0) {
            let newTransformX = originTransformX + 800;
            transitionDiv.style.transitionDuration = '1.5s';
            transitionDiv.style.transform = `translateX(${newTransformX}px)`;
            dispatch(actionCreators.pageButtonShowAction(true, true));
        }
        if (originTransformX === -800) {
            dispatch(actionCreators.pageButtonShowAction(false, true))
        }
    },
    handleTurnNext(transitionDiv) {
        let originTransformX = getOriginTransformX(transitionDiv);
        if (originTransformX > -5600) {
            let newTransformX = originTransformX - 800;
            transitionDiv.style.transitionDuration = '1.5s';
            transitionDiv.style.transform = `translateX(${newTransformX}px)`;
            dispatch(actionCreators.pageButtonShowAction(true, true));
        }
        if (originTransformX === -4800) {
            dispatch(actionCreators.pageButtonShowAction(true, false));
        }
    },
    getSuggestedUserList() {
        dispatch(actionCreators.getSuggestedUserList());
    }

});

export default connect(mapState, mapDispatch)(SuggestedUserList);