import React, { Component } from 'react';

import Nav from '../../Components/Nav/Nav';
import ArticleList from '../Main/Component/ArticleList/ArticleList';
import MainAll from '../Main/Component/MainAll/MainAll';
import Footer from '../../Components/Footer/Footer';

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
