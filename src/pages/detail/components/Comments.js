import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import {
    CommentsWrapper,
    OperationButtonWrapper,
    FavourWrapper,
    CommentsPanel,
    CommentsListUl,
    CommentsItemLi,
    AvatarWrapper,
    Img,
    CommentsDetail,
    CommentsNumber,
    PubTime,
    AddCommentsPanel,
    CommentsForm,
    Textarea
} from '../style/commentsStyle';

class Comments extends Component {

    getComments() {
        const commentList = this.props.commentList.toJS();
        const commentItemList = [];
        commentList.map(item => {
            const node = item.node;
            const { id, owner, text, created_at: commentTime, edge_liked_by } = node;
            const { username: userName, profile_pic_url: picUrl } = owner;
            const { count: edgeLikeCount } = edge_liked_by;
            return commentItemList.push(
                <CommentsItemLi key={id}>
                    <div style={{width: 'calc(100% - 28px)'}}>
                        <AvatarWrapper>
                            <Img alt={userName+" 的头像"} src={picUrl}/>
                        </AvatarWrapper>
                        <CommentsDetail>
                            <Link to='/' style={{color: '#262626'}}>
                                {userName}
                            </Link>
                            <span>
                                {text}
                            </span>
                            <CommentsNumber>
                                <time title="2019年10月15日">{commentTime}</time>
                                <button>{edgeLikeCount? edgeLikeCount+' 次赞':''}</button>
                                <button>回复</button>
                            </CommentsNumber>
                        </CommentsDetail>
                    </div>
                    <i className="iconfont more">&#xe79d;</i>
                    <i className="iconfont">&#xe606;</i>
                </CommentsItemLi>)
        })

        return commentItemList;
    }
    render() {
        console.log('comments render');
        const likeCount = this.props.previewLike.toJS().count;
        const { pubTime } = this.props;
        return (
            <CommentsWrapper>
                <OperationButtonWrapper>
                    <i className="iconfont">&#xe606;</i>
                    <i className="iconfont">&#xe709;</i>
                    <i className="iconfont">&#xe63b;</i>
                    <i className="iconfont">&#xe6a4;</i>
                </OperationButtonWrapper>
                <FavourWrapper><button>共 <span>{likeCount}</span> 位用户</button> 赞了</FavourWrapper>
                <CommentsPanel>
                    <CommentsListUl>
                        {this.getComments()}
                    </CommentsListUl>
                </CommentsPanel>
                <PubTime>
                    <time title="2019年10月15日">{pubTime}</time>
                </PubTime>
                <AddCommentsPanel>
                    <CommentsForm method="POST">
                        <Textarea placeholder="添加评论..." autoComplete="off" autoCorrect="off" style={{height: '18px'}}></Textarea>
                        <button type="submit" disabled="">发布</button>
                    </CommentsForm>
                </AddCommentsPanel>
            </CommentsWrapper>
        )
    }
}


const mapState = state => ({
    commentList: state.getIn(['detail', 'commentList']),
    previewLike: state.getIn(['detail', 'previewLike']),
    pubTime: state.getIn(['detail', 'pubTime'])
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Comments);