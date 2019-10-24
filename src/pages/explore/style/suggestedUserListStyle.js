import styled from 'styled-components';

export const SuggestedUsersWrapper = styled.div `
    @media (min-width: 736px){
        margin-bottom: 60px;
    }
    @media (max-width: 735px){
        display: none;
    }
`;

export const Title = styled.h2 `
    color: #999;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 16px;
    text-align: left;
    a,a:visited {
        color: #3897f0;
        display: block;
        flex-grow: 0;
        float: right;
        font-size: 14px;
        font-weight: 600;
    }
`;

export const UserWrapper = styled.div `
    padding-bottom: 16px;
    padding-top: 16px;
    flex: 0 0 auto;
    justify-content: flex-start;
`;

export const BlurBorderWrapper = styled.div `
    position: relative;
    &::before {
        left: 0;
        background-image: linear-gradient(to left,rgba(250,250,250,0),#fafafa 100%);
        z-index: 10;
    }
    &::after {
        right: 0;
        background-image: linear-gradient(to right,rgba(250,250,250,0),#fafafa 100%);
        z-index: 1;
    }
    &::before, &::after{
        content: '';
        height: 100%;
        pointer-events: none;
        position: absolute;
        width: 16px;
    }
    &>button{
        justify-self: center;
        outline: 0;
        padding: 16px 8px;
        position: absolute;
        top: 35%;
        cursor: pointer;
        display: flex;
        overflow: hidden;
        text-indent: 110%;
        white-space: nowrap;
        color: #262626;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 18px;
        background: 0 0;
        border: 0;
        flex: 0 0 auto;
        justify-content: center;
        align-items: center;
        &.hidden{
            display: none;
        }
    }
`;

export const UserContent = styled.div `
    display: block;
    line-height: 0;
    overflow: hidden;
`;

export const TransitionDiv = styled.div `
    flex-direction: row;
    outline: 0;
    overflow-x: visible;
`;

export const UserListUl = styled.ul `
    padding-left: 0px;
    padding-right: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
`;

export const UserItemLi = styled.li `
    transition-duration: .05s,.3s;
    transition-property: opacity,width;
    transition-timing-function: linear,ease;
    flex: 0 0 auto;
    overflow: hidden;
`;

export const UserItemWrapper = styled.div `
    flex: 0 0 auto;
    overflow: hidden;
`;

export const UserItemContent = styled.div `
    padding: 16px;
    flex: 0 0 auto;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
`;

export const ImgWrapperA = styled.a `
    cursor: pointer;
    background-color: #fafafa;
    border-radius: 50%;
    box-sizing: border-box;
    display: block;
    flex: 0 0 auto;
    overflow: hidden;
    position: relative;
    &::after {
        border: 1px solid rgba(0,0,0,.0975);
        border-radius: 50%;
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }
`;

export const Img = styled.img `
    height: 100%;
    width: 100%;
`;

export const NameWrapperA = styled.a `
    margin: 16px auto 8px;
    flex: 0 0 auto;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    display: flex;
    line-height: 18px;
    &>i{
        margin-left: 4px;
        flex: 0 0 auto;
        font-size: 12px;
        color: #3897f0;
    }
`;

export const Name = styled.div `
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #262626;
    font-weight: 600;
    font-size: 14px;
`;

export const Desc = styled.div `
    flex: 0 0 auto;
    text-align: center;
    white-space: pre-wrap;
    color: #999;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 8px;
`;

export const FollowButton = styled.div `
    flex: 0 0 auto;
    border: 1px solid transparent;
    background-color: #3897f0;
    border-radius: 4px;
    color: #fff;
    position: relative;
    appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: 600;
    padding: 5px 9px;
    text-align: center;
    text-overflow: ellipsis;
    user-select: none;
    font-size: 14px;
    line-height: 18px;
}
`;

export const PrevButton = styled.button `
    left: 0;
    &>i{
        color: rgba(0, 0, 15, .5);
        position: relative;
        left: -24px;
        font-size: 24px;
    }
`;

export const NextButton = styled.button `
    right: 0;
    &>i{
        color: rgba(0, 0, 15, .5);
        position: relative;
        right: 24px;
        font-size: 24px;
    }
`;