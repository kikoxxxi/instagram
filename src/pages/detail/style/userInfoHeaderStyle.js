import styled from 'styled-components';

export const HeaderWrapper = styled.header `
    border-left: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    height: 72px;
    padding: 16px;
    right: 0;
    width: 335px;
    align-items: center;
    flex-direction: row;
    margin-right: 0;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    @media (max-width: 735px){
        border-bottom-width: .5px;
        padding: 16px;
        padding-right: 40px;
        height: 60px;
        border-bottom: 1px solid #efefef;
        position: unset;
        width: 100%;
    }
`;

export const AvatarWrapper = styled.a `
    cursor: pointer;
    background-color: #fafafa;
    border-radius: 50%;
    box-sizing: border-box;
    display: block;
    width: 32px;
    height: 32px;
    overflow: hidden;
    position: relative;
    flex: none;
    align-self: center;
    &::after {
        box-sizing: border-box;
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


export const PersonalDetailsWrapper = styled.div `
    margin-left: 16px;
    align-items: flex-start;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
`;

export const NameWrapper = styled.div `
    max-width: 220px;
    flex-direction: row;
    a{
        flex: 0 1 auto;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 5px;
        margin-left: -5px;
        font-size: 14px;
    }
`;

export const DotSpan = styled.span `
    color: #262626;
    margin-left: 4px;
    margin-right: 4px;
`;

export const FollowButton = styled.button `
    border: 0;
    color: #3897f0;
    padding: 0;
    position: relative;
    appearance: none;
    background: 0 0;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    text-transform: inherit;
    text-overflow: ellipsis;
    user-select: none;
    width: auto;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 18px;
`;

export const Desc = styled.div `
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    &>a{
        color: #262626;
        max-width: 100%;
        line-height: 15px;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;