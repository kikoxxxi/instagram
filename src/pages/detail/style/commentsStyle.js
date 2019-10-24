import styled from 'styled-components';

export const CommentsWrapper = styled.div `
    box-sizing: border-box;
    padding: 0 16px;
    @media (min-width: 736px){
        padding: 0;
        border-left: 1px solid #efefef;
        top: 72px;
        bottom: 0;
        position: absolute;
        right: 0;
        width: 335px;
    }
`;

export const OperationButtonWrapper = styled.section `
    padding-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-top: 1px solid #efefef;
    margin: 0;
    order: 2;
    flex-direction: row;
    max-height: 45px;
    min-height: 45px;
    position: relative;
    i{
        font-size: 28px;
        color: rgb(38, 38, 38);
        font-weight: 200;
        margin-left: 10px;
    }
    i:first-child{
        margin-left: 0;
    }
    i:last-child{
        position: absolute;
        right: 10px;
    }
`;

export const FavourWrapper = styled.div `
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 4px;
    order: 3;
    flex-direction: row;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    button{
        color: #262626;
        border: 0;
        display: inline;
        padding: 0;
        position: relative;
        background-color: transparent;
        background: 0 0;
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

export const CommentsPanel = styled.div `
    padding: 0;
    margin: 0 0 auto;
    order: 1;
    overflow-x: hidden;
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
`;

export const CommentsListUl = styled.ul `
    box-sizing: content-box;
    flex-grow: 1;
    height: calc(100% - 32px);
    overflow-y: scroll;
    left: 0;
    padding: 16px 12px;
    position: absolute;
    width: calc(100% - 8px);
    @media (max-width: 735px){
        display: none;
    }
`;

export const CommentsItemLi = styled.li `
    padding-bottom: 0;
    margin-left: -12px;
    margin-right: 0;
    padding: 12px 16px;
    width: auto;
    overflow: hidden;
    position: relative;
    word-wrap: break-word;
    padding-top: 5px;
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    &:hover .more{ display: block; right: 34px; }
    &>div{
        flex-direction: row;
    }
    i{
        color: #999;
        margin-top: 7px;
        cursor: pointer;
        position: absolute;
        right: 10px;
    }
    .more{
        display: none;
    }
`;

export const AvatarWrapper = styled.a `
    cursor: pointer;
    background-color: #fafafa;
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    width: 32px;
    height: 32px;
    overflow: hidden;
    position: relative;
    flex: none;
    margin: 0 18px 0 0;
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


export const CommentsDetail = styled.div `
    display: inline-block;
    flex-shrink: 1;
    min-width: 0;
    font-size: 14px;
    a{
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 5px;
        margin-left: -5px;
        margin-right: 4px;
    }
`;

export const CommentsNumber = styled.div `
    display: block;
    color: #999;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin-top: 16px;
    margin-bottom: 4px;
    time, button{
        color: #999;
        cursor: pointer;
        font-weight: 600;
        background: 0 0;
        border: 0;
        display: inline;
        line-height: 14px;
        margin-right: 16px;
        padding: 0;  
    }
    time{
        cursor: default;
        font-weight: 400;
        @media (min-width: 736px){
            font-size: 15px;
            line-height: 18px;
        }
    }

`;

export const PubTime = styled.div `
    padding-left: 16px;
    order: 4;
    color: #999;
    margin-bottom: 5px;
    text-transform: uppercase;
    justify-content: center;
    time{
        font-size: 10px;
        letter-spacing: .2px;
        @media (min-width: 736px){
            line-height: 18px;
        }  
    }
`;

export const AddCommentsPanel = styled.div `
    padding-left: 16px;
    padding-right: 16px;
    order: 5;
    border-top: 1px solid #efefef;
    color: #999;
    flex-shrink: 0;
    font-size: 14px;
    line-height: 18px;
    min-height: 56px;
    justify-content: center;
    @media (max-width: 735px){
        display: none;
    }
`;

export const CommentsForm = styled.form `
    flex-direction: row;
    flex-shrink: 1;
    position: relative;
    display: flex;
    flex-grow: 1;
    align-items: center;
    button{
        opacity: .3;
        pointer-events: none;
        border: 0;
        color: #3897f0;
        display: inline;
        padding: 0;
        position: relative;
        background: 0 0;
        box-sizing: border-box;
        font-weight: 600;
        text-align: center;
        text-transform: inherit;
        text-overflow: ellipsis;
        user-select: none;
        width: auto;
    }
`;

export const Textarea = styled.textarea `
    background: 0 0;
    border: 0;
    color: #262626;
    font-size: inherit;
    height: 18px;
    max-height: 80px;
    outline: 0;
    padding: 0;
    resize: none;
    display: flex;
    flex-grow: 1;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    line-height: 18px;
`;

