import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import { LoadingWheels } from '../../../common/UtilComponents';
import LazyLoad from 'react-lazyload';
import { debounce } from 'lodash';
import {
    Article,
    DiscoverWrapper,
    RowWrapper,
    ImgWrapper,
    Img,
    ImgShadow,
    ImgInfoUl,
    LoadingWheelsWrapper
} from '../style/discoverStyle';



class Discover extends Component {

    getDiscoverImg() {
        const discoverList = this.props.discoverList.toJS();
        const discoverItemList = [];
        const discoverRowList = [];

        discoverList.map(discoverItem => {
            let node = discoverItem.node;
            let shortcode = node.shortcode;
            let accessibilityCaption = node.accessibility_caption;
            let src = node.thumbnail_src;
            let thumbnail_resources = node.thumbnail_resources;
            let srcset = thumbnail_resources.map(item => `${item.src} ${item.config_width}w`)
            let heartNum = node.edge_liked_by.count;
            let commentNum = node.edge_media_to_comment.count;
            let id = node.id;
            // sizes='(max-width: 640px) calc(.333 * (100vw -50px)), 100vw'
            return discoverItemList.push(
                <Link to={'/p/'+shortcode} key={id}>
                        <ImgWrapper>
                            <div>
                                <LazyLoad once={true} offset={200}>
                                    <Img 
                                        src={src} 
                                        sizes='calc(.333 * 100vw)'
                                        srcSet={srcset.join(',')}
                                        alt={accessibilityCaption} 
                                        style={{objectFit: 'cover', visibility: 'hidden'}}/>
                                </LazyLoad>
                            </div>
                        </ImgWrapper>

                        <ImgShadow className='img-shadow' style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                            <ImgInfoUl>
                                <li>
                                    <span>{heartNum}</span>
                                    <i className='iconfont'>&#xe601;</i>
                                </li>
                                <li>
                                    <span>{commentNum}</span>
                                    <i className='iconfont'>&#xe603;</i>
                                </li>
                            </ImgInfoUl>
                        </ImgShadow>
                </Link>
            )
        })
        discoverItemList.map((discoverItem, index) => {
            if (index % 3 === 0) {
                return discoverRowList.push(
                    <RowWrapper key={index}>
                            {discoverItemList.slice(index, index+3)}
                    </RowWrapper>
                )
            }
            return discoverRowList;
        })

        return discoverRowList;
    };

    render() {
        const { handleDiscoverImgLoad } = this.props;
        return (
            <Article>  
                <DiscoverWrapper 
                    onLoad={handleDiscoverImgLoad}
                    style={{flexDirection: 'column', padding: '0 auto'}}> 
                    {this.getDiscoverImg()}
                </DiscoverWrapper> 
                <LoadingWheelsWrapper>
                    <LoadingWheels/>
                </LoadingWheelsWrapper>
            </Article>
        )
    };

    componentDidMount() {
        this.loadImg();
        window.addEventListener('scroll', this.debounceLoad);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.debounceLoad);
    }

    loadImg = () => {
        const { loadDiscoverImg, page } = this.props;
        loadDiscoverImg(page);
    }

    debounceLoad = debounce(() => {
        this.loadImg()
    }, 300)
};

const mapState = (state) => ({
    discoverList: state.getIn(['explore', 'discoverList']),
    page: state.getIn(['explore', 'page']),
});

const mapDispatch = (dispatch) => ({
    loadDiscoverImg(page) {
        // 判断是否需要加载
        // document.body.offsetHeight;返回当前网页高度 
        // innerHeight 浏览器窗口的视口（viewport）高度赋值 
        if (window.scrollY + window.innerHeight + 500 > document.documentElement.scrollHeight) {
            dispatch(actionCreators.loadDiscoverImg(page));
        }
    },
    handleDiscoverImgLoad(e) {
        let target = e.target;
        if (target.nodeName.toLowerCase() === 'img') {
            target.style.visibility = "";
        }
    }
});

export default connect(mapState, mapDispatch)(Discover);