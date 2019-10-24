import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const NavWrapper = styled.nav `
    order: 0;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    height: 77px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    transition: height .2s ease-in-out;
    background-color: #fff;
    &.toggle{
        height: 52px;
    }
`;

export const NavContent = styled.div `
    align-items: center;
    flex-direction: row;
    justify-content: center;
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    height: 100%;
    transition: height .2s ease-in-out;
    &.toggle{
        height: 52px;
        padding: 0 20px;
    }
`;

export const LogoWrapper = styled.div `
    min-width: 40px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    align-content: stretch;
    flex: 1 0 0%;
    .iconfont{
        flex: 0 0;
        font-size: 26px;
        color: rgb(38, 38, 38);
        @media (max-width : 580px){
            font-size: 1px;
        }
    }
    a{
        min-width: 40px;
    }
`;

export const LogoCotent = styled.div `
    flex-direction: row;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    align-content: stretch;
    flex: 0 0;
`;

export const Split = styled.div `
    background-color: #262626;
    height: 28px;
    margin: 0 16px;
    transition: opacity .1s ease-out;
    width: 1px;
    @media (max-width : 580px){
        margin: 0 10px;
    }
    &.toggle{
        opacity: 0;
    }
`;

export const LogoTextWrapper = styled.div `
    flex: 0 0;
    margin-top: 7px;
`;

export const Logo = styled.img.attrs({
    alt: "Instagram",
    src: logoPic
})`
    flex: 0 0;
    height: 29px;
    width: 103px;
    object-fit: contain;
    transition: opacity .1s ease-out;
    &.toggle{
        opacity: 0;
    }
`;

export const SearchWrapper = styled.div `
    height: 28px;
    flex: 0 1 auto;
    min-width: 125px;
    width: 215px;
    position: relative;
    @media (max-width: 580px){
        display: none;
    }
    #glass-icon{
        &.focused{
            display: inline;
            position: absolute;
            top: 7px;
            left: 9px;
            z-index: 2;
            color: #999;
        }
        &.hidden{
            display: none;
        }
    }
    #clear-icon{
        &.focused{
            display: inline;
            position: absolute;
            cursor: default;
            top: 7px;
            right: 9px;
            z-index: 2;
            color: #999;
        }
        &.hidden{
            display: none;
        }
    }
`;

export const SearchInput = styled.input.attrs({
    autocapitalize: "none",
    placeholder: "搜索"
})`
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    outline: 0;
    padding: 3px 10px 3px 26px;
    z-index: 2;
    line-height: 18px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    cursor: text;
    color: #999;
    font-size: 14px;
    font-weight: 300;
`;

export const NoFocuseInputWrapper = styled.div.attrs({
    role: 'button'
})`
    background: #fafafa;
    border: solid 1px #dbdbdb;
    justify-content: center;
    border-radius: 3px;
    color: #999;
    font-size: 14px;
    font-weight: 300;
    left: 0;
    padding: 7px;
    position: absolute;
    text-align: center;
    top: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    &.focused{
        display: none;
    }
}
`;

export const NoFocuseInputContent = styled.div `
    display: inline;
    left: -5px;
    .iconfont{
        margin-right: 6px;
        vertical-align: baseline;
    }
`;

export const NoFocuseSearchText = styled.div `
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
    white-space: nowrap;
    display: inline-block;
`;

export const SearchInfoWrapper = styled.div `
    &.hidden{
        display: none;
    }
`;

export const SearchInfoTriangleIcon = styled.div `
    background: #fff;
    border: solid 1px #e6e6e6;
    box-shadow: 0 0 5px 1px rgba(0,0,0,.0975);
    position: absolute;
    content: ' ';
    height: 14px;
    left: 0;
    margin: auto;
    right: 0;
    top: 12px;
    transform: rotate(45deg);
    width: 14px;
    z-index: 1;
`;

export const SearchInfoContentWrapper = styled.div `
    background: #fff;
    border: solid 1px #e6e6e6;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0,0,0,.0975);
    display: block;
    position: absolute;
    right: -12px;
    top: 18px;
    width: 243px;
    z-index: 9;
    &::after {
        border-color: transparent transparent #fff;
        border-style: solid;
        border-width: 0 10px 10px;
        height: 0;
        left: 110px;
        top: -10px;
        width: 0;
        z-index: 3;
        content: ' ';
        position: absolute;
    }
`;

export const SearchInfoContent = styled.div `
    max-height: 362px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
`;

export const SearchInfoItemWrapper = styled.a `
    align-items: center;
    border-bottom: solid 1px #efefef;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    height: 50px;
    padding: 8px 14px;
    cursor: pointer;
    order: ${(props) => props.order}
    &:hover{
        background: #fafafa;
    }
`;

export const SearchInfoItemContent = styled.div `
    align-items: center;
    margin-right: 0;
    white-space: nowrap;
    width: 100%;
    flex-direction: row;
    color: #999;
    &>i{
        box-sizing: border-box;
        width: 32px;
        font-size: 22px;
        align-self: center;
        padding-left: 8px;
    }
`;

export const ImgSpan = styled.span `
    width: 32px;
    height: 32px;
    background-color: #fafafa;
    border-radius: 50%;
    box-sizing: border-box;
    display: block;
    flex: 0 0 auto;
    overflow: hidden;
    position: relative;
`;

export const Img = styled.img `
    height: 100%;
    width: 100%;
`;

export const InfoTextWrapper = styled.div `
    flex-shrink: 1;
    justify-content: center;
    min-width: 0;
    margin: 0 0 0 10px;
`;

export const InfoNameWrapper = styled.div `
    color: #262626;
    flex-direction: row;
    font-size: 14px;
    text-align: left;
    align-items: flex-end;
    .iconfont{
        margin-left: 5px;
        font-size: 12px;
        color: #3897f0;
    }
`;

export const NameSpan = styled.span `
    line-height: 22px;
    margin-bottom: -4px;
    overflow: hidden;
    font-weight: 600;
    text-overflow: ellipsis;
`;

export const InfoDesc = styled.div `
    font-weight: 300;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
    font-size: 14px;
    text-align: left;
    flex-direction: row;
`;

export const PostsNumber = styled.span `

`;


export const AditionWrapper = styled.div `
    flex: 1 1 0%;
    justify-content: flex-end;
    flex-wrap: wrap;
    @media (max-width: 580px){
            padding-left: 0;
    }
`;

export const AditionContent = styled.div `
    align-items: flex-end;
    flex-direction: row;
    justify-content: flex-end;
    padding-left: 24px;
    white-space: nowrap;
    .iconfont{
        margin-left: 30px;
        font-size: 27px;
        color: rgb(38, 38, 38); 
    }
`;