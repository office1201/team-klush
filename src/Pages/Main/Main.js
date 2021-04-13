import React, { Component } from 'react';

import Nav from '../Main/Component/Nav';
import ArticleList from '../Main/Component/ArticleList';
import MainAll from './Component/MainAll';
import Footer from '../Main/Component/Footer';

import '../../Styles/common.scss';
import '../../Styles/reset.scss';
import '../Main/Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <ArticleList />
        <MainAll />
        <Footer />
      </div>
    );
  }
}

export default Main;
