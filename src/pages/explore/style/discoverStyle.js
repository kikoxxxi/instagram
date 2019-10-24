import styled from 'styled-components';

export const Article = styled.article `
    margin-bottom: 20px;
`;

export const DiscoverWrapper = styled.div `
    
`;

export const RowWrapper = styled.div `
    flex-direction: row;
    @media (min-width: 736px){
        margin-bottom: 28px;
    }
    @media (max-width: 735px){
        margin-bottom: 3px;
    }
    &>*{
        flex: 1 0 0%;
    }
    &>a{
        background-color: #efefef;
        position: relative;
        @media (min-width: 736px){
            margin-right: 28px;
        }
        @media (max-width: 735px){
            margin-right: 3px;
        }
        :hover .img-shadow{ display: flex}
    }
`;

export const ImgWrapper = styled.div `
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    overflow: hidden;
    &>div{
        display: block;
        overflow: hidden;
        padding-bottom: 100%;
    }
`;

export const Img = styled.img `
    user-select: none;
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
`;

export const ImgShadow = styled.div `
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: none;
`;

export const ImgInfoUl = styled.ul `
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    &>li{
        display: inline-flex;
        flex-direction: row-reverse;
        margin-right: 30px;
        :last-child{
            margin-right: 0;
        }
        @media (max-width: 735px){
            margin-bottom: 5px;
            margin-right: 0;
        }
    }
    .iconfont{
        margin-right: 7px;
        font-size: 20px;
    }
    @media (max-width: 735px){
        flex-direction: column;
    }
`;

export const LoadingWheelsWrapper = styled.div `
    height: 32px;
    width: 100%;
    justify-content: center;
    margin-top: 40px;
`;