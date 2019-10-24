import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';


import {
    PictureWrapper,
    ImgWrapper,
    Img
} from '../style/pictureStyle';

class Picture extends Component {
    render() {
        console.log('pic render');
        const { accessibilityCaption, displayUrl, displayResources, dimensions } = this.props;
        const srcset = displayResources.toJS().map(item => `${item.src} ${item.config_width}w`);
        const padding = (dimensions.height / dimensions.width) * 100 + '%';
        console.log(padding);
        return (
            <PictureWrapper>
                <div>
                    <ImgWrapper 
                        role='button' 
                        tabindex='0'
                        style={{paddingBottom: padding}}>
                        <LazyLoad once={true}>
                        <Img 
                            sizes='calc(.8 * 100vw)' 
                            srcSet={srcset.join(',')}
                            alt={accessibilityCaption} 
                            src={displayUrl}/>
                        </LazyLoad>
                    </ImgWrapper>
                    <div></div>
                </div>
            </PictureWrapper>
        )
    }
}


const mapState = state => ({
    accessibilityCaption: state.getIn(['detail', 'accessibilityCaption']),
    displayUrl: state.getIn(['detail', 'displayUrl']),
    displayResources: state.getIn(['detail', 'displayResources']),
    dimensions: state.getIn(['detail', 'dimensions']),
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Picture);