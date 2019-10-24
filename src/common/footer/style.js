import styled from 'styled-components';

export const FooterWrapper = styled.footer `
    order: 5;
    padding: 0 20px;
    background-color: #fafafa;
`;

export const FooterContent = styled.div `
    font-size: 12px;
    font-weight: 600;
    margin: 0 auto;
    text-transform: uppercase;
    width: 100%;
    @media (min-width: 876px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 38px 0;
    }
    @media (max-width : 875px){
        padding: 10px 0;
        text-align: center;
    }
`;

export const Nav = styled.nav `
    @media (min-width: 876px){
        max-width: 100%;
    }
`;

export const NavUl = styled.ul `
    flex-grow: 1;
    list-style: none;
    margin-bottom: 3px;
    @media (max-width: 875px){
        justify-content: center;
        margin: 0 auto;
        max-width: 360px;
    }
    @media (min-width: 876px){
        margin-right: 16px;
    }
`;

export const Li = styled.li `
    display: inline-block;
    margin-bottom: 7px;
    margin-right: 16px;
    &:last-child{
        margin-right: 0;
    }
`;

export const LangSpan = styled.span `
    color: #003569;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    position: relative;
    text-transform: uppercase;
    vertical-align: top;
`;

export const LangSelect = styled.select `
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const CompSpan = styled.span `
    color: #999;
`;
