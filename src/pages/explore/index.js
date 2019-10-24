import React, { Suspense, Component } from 'react';
import { connect } from 'react-redux';
import Discover from './components/Discover';
import { IconfontStyle } from '../../statics/iconfont/iconfont';
import { LoadingWheels } from '../../common/UtilComponents';


import {
    MainWrapper,
    MainContent,
    DiscoverTitle,
    LoadingWheelsWrapper
} from './style/exploreStyle';

const SuggestedUserList = React.lazy(() => import('./components/SuggestedUserList'));

class Explore extends Component {
    render() {
        return (
            <MainWrapper>
                <IconfontStyle/>
                <MainContent>
                    <Suspense fallback={<LoadingWheelsWrapper><LoadingWheels/></LoadingWheelsWrapper>}>
                        <SuggestedUserList/>
                    </Suspense>
                    <DiscoverTitle>
                        探索
                    </DiscoverTitle>
                    <Discover/>
                </MainContent>
            </MainWrapper>
        )
    }
};


const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});
export default connect(mapState, mapDispatch)(Explore);