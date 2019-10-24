import styled from 'styled-components';


export const MainWrapper = styled.main `
    background-color: #fafafa;
    flex-grow: 1;
    order: 4;
    padding-top: 50px;
`;

export const MainContent = styled.div `
    flex-grow: 1;
    margin: 0 auto 30px;
    max-width: 935px;
    width: 100%;
    @media (max-width: 639px){
        background: #fff;
        margin-bottom: 10px;
    }
    @media (max-width: 735px){
        padding-top: 32px;
    }
    @media (min-width: 736px){
        box-sizing: content-box;
        padding: 40px 20px 0;
        width: calc(100% - 40px);
    }
    @media (min-width: 640px){
        padding-top: 60px;
    }
`;

export const DiscoverTitle = styled.h2 `
    color: #999;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 16px;
    text-align: left;
    @media (max-width: 735px){
        font-size: 14px;
        padding: 0 8px;
    }
`;

export const LoadingWheelsWrapper = styled.div `
    height: 32px;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
`;