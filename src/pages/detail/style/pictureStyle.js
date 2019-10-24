import styled from 'styled-components';

export const PictureWrapper = styled.div `
    background-color: #fafafa;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    margin-right: 335px;
    min-height: 450px;
    @media (max-width: 735px){
        margin-right: 0;
    }
    &>div div:last-child{
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
        top: 0;
    }
    &>div {
        background-color: #efefef;
        width: 100%;
    }
`;

export const ImgWrapper = styled.div `
    background-color: #efefef;
    display: block;
    overflow: hidden;
`;

export const Img = styled.img `
    user-select: none;
    width: 100%;
    object-fit: cover;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
`;
