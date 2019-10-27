import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconfontStyle } from '../../statics/iconfont/iconfont';
import { connect } from 'react-redux';
// import { debounce } from 'lodash';
import { actionCreators } from './store';
import SearchInfoList from './SearchInfoList';

import {
    NavWrapper,
    NavContent,
    LogoWrapper,
    LogoTextWrapper,
    Split,
    Logo,
    LogoCotent,
    SearchWrapper,
    SearchInput,
    NoFocuseInputWrapper,
    NoFocuseInputContent,
    NoFocuseSearchText,
    AditionWrapper,
    AditionContent,
}
from './style';


class Header extends Component {

    render() {
        const { focused, inputValue, toggle, handleSearchFocus, handlSearchBlur, handleSearchChange } = this.props;
        return (
            <NavWrapper className={toggle ? 'toggle':''}>
            <IconfontStyle/>
                <NavContent className={toggle ? 'toggle':''}>
                    <LogoWrapper>
                        <Link to='/'>
                            <LogoCotent>
                                <i className='iconfont'>&#xe76a;</i>
                                <Split className={toggle ? 'toggle':''}/>
                                <LogoTextWrapper>
                                    <Logo className={toggle ? 'toggle':''}/>
                                </LogoTextWrapper>
                            </LogoCotent>
                        </Link>
                    </LogoWrapper>
                    <SearchWrapper>
                        <SearchInput
                        ref={(input)=>this.input=input}
                        onBlur={handlSearchBlur}
                        onChange={(e)=>{e.persist();return handleSearchChange(e)}}
                        />
                        <NoFocuseInputWrapper 
                        onClick={()=>handleSearchFocus(this.input)}
                        className={focused ? 'focused' : ''}>
                            <NoFocuseInputContent>
                                <i className='iconfont'>&#xe604;</i>
                                <NoFocuseSearchText>{inputValue.length? inputValue:'搜索'}</NoFocuseSearchText>
                            </NoFocuseInputContent>
                        </NoFocuseInputWrapper>
                        <i id='glass-icon' className={focused ? 'focused iconfont' : 'hidden iconfont'}>&#xe604;</i>
                        <i id='clear-icon' className={focused ? 'focused iconfont' : 'hidden iconfont'}>&#xe62a;</i>
                        <SearchInfoList/>
                    </SearchWrapper>
                    <AditionWrapper>
                        <AditionContent>
                            <Link to='/explore'><i className='iconfont'>&#xe605;</i></Link>
                            <i className='iconfont'>&#xe606;</i>
                            <i className='iconfont'>&#xe614;</i>
                        </AditionContent>
                    </AditionWrapper>

                </NavContent>
            </NavWrapper>
        )
    }

    componentDidMount() {
        window.addEventListener('scroll', this.props.changeScrollHeader);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollHeader);
    }
}

const myDebounce = (fun, duration) => {
    let timer = null;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>fun(...args), duration);
    }
}

const mapState = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        inputValue: state.getIn(['header', 'inputValue']),
        toggle: state.getIn(['header', 'toggle'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        handleSearchFocus(input) {
            input.focus();
            input.select();
            dispatch(actionCreators.searchFocusAction());
        },
        handlSearchBlur() {
            dispatch(actionCreators.searchBlurAction());
        },
        handleSearchChange: myDebounce((e) => {
            dispatch(actionCreators.getSearchList(e.target.value));
        }, 300),
        changeScrollHeader() {
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleHeaderAction(true));
            } else {
                dispatch(actionCreators.toggleHeaderAction(false));
            }
        },
    }
};

export default connect(mapState, mapDispatch)(Header);