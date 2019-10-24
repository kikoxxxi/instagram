import styled from 'styled-components';

export const DetailWrapper = styled.main `
    background-color: #fafafa;
    flex-grow: 1;
    order: 4;
    padding-top: 76px;
    box-sizing: border-box;
`;

export const DialogWrapper = styled.div `
    flex-grow: 1;
    max-width: 935px;
    width: 100%;
    margin: 0 auto 16px;
    @media (min-width: 736px){
        box-sizing: content-box;
        justify-content: center;
        padding: 50px 20px;
        width: calc(100% - 40px);
    }
`;

export const DialogContent = styled.div `
    @media (min-width: 736px){
        align-items: center;
        margin: 0 auto;
        width: 100%;
    }
`;

export const Article = styled.article `
    width: 100%;
    padding: 0;
    @media (min-width: 736px){
        background-color: #fff;
        border: 1px solid #e6e6e6;
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
    }
`;