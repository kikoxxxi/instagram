import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Footer from './common/footer';
import Explore from './pages/explore';
import Detail from './pages/detail';
import store from './store';
import { GlobalStyle } from './style.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <BrowserRouter basename={ process.env.PUBLIC_URL }>
                <section>
                  <GlobalStyle />
                  <Header />
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/explore' exact component={Explore}></Route>
                  <Route path='/p/:shortcode' exact component={Detail}></Route>
                  <Footer />
                </section>
              </BrowserRouter>
            </Provider>
        );
    }
}

export default App;