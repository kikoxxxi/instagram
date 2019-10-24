import styled from 'styled-components';

export const Main = styled.main `
    background-color: #fafafa;
    flex-grow: 1;
    order: 4;
`;


export const Section = styled.section `
    flex-grow: 1;
    margin: 0 auto;
    max-width: 600px;
    position: relative;
    width: 100%;
    padding-top: 120px;
    @media (max-width : 640px){
        padding-top: 100px;
    }

`;

export const SuggestionWrapper = styled.div `

`;

export const Title = styled.h4 `
    color: #262626;
    font-weight: 600;
`;

export const SuggestedUserWrapper = styled.div `
    margin-top: 16px;
    padding-bottom: 8px;
    padding-top: 8px;
    flex: 0 0 auto;
    justify-content: flex-start;
    background-color: #fff;
    overflow: hidden auto;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
`;

export const UserItemWrapper = styled.div `
    padding: 8px 16px;
    flex: 0 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const ImgSpan = styled.a `
    margin-right: 12px;
    width: 44px;
    height: 44px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    &::after{
        border: 1px solid rgba(0,0,0,.0975);
        border-radius: 50%;
        bottom: 0;
        content: '';
        left: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
    }
`;

export const Img = styled.img `
    height: 100%;
    width: 100%;
`;

export const UserInfoWrapper = styled.div `
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    &>a{
        text-decoration: none;
        cursor: pointer;
        flex: 0 0 auto;
        color: #262626;
    }
`;

export const UserNameWrapper = styled.div `
    flex-direction: row;
    align-items: flex-end;
    cursor: pointer;
    i{
        margin-left: 8px;
        font-size: 12px;
        color: #3897f0;
    }
`;

export const NameSpan = styled.div `
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
`;

export const UserFullName = styled.div `
    color: #999;
    font-size: 14px;
    line-height: 18px;
`;

export const UserDesc = styled.div `
    color: #999;
    font-size: 14px;
    line-height: 18px;
`;

export const FollowWrapper = styled.div `
    margin-right: 8px;
`;

export const FollowButton = styled.button `
    border: 1px solid transparent;
    background-color: #3897f0;
    border-radius: 4px;
    color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: 600;
    padding: 5px 9px;
    text-align: center;
    user-select: none;
    width: auto;
    font-size: 14px;
    line-height: 18px;
`;