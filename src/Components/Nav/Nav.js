import React, { Component } from 'react';

import CategoryProducts from './CategoryProducts/CategoryProducts';
import CategoryIntroduce from './CategoryIntroduce/CategoryIntroduce';

import { MAIN_API } from '../../config';

import '../Nav/Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      currentId: -1,
      navList: [],
    };
  }

  componentDidMount() {
    fetch(`${MAIN_API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          navList: data.results,
        });
      });
  }

  navMouseOver = id => {
    this.setState({ currentId: id });
  };

  navMouseLeave = () => {
    this.setState({ currentId: -1 });
  };

  render() {
    const { navList, currentId } = this.state;
    return (
      <div onMouseLeave={this.navMouseLeave} className="Nav">
        <nav>
          <h1>KLUSH</h1>
          <ul className="navMenu">
            <li onMouseOver={() => this.navMouseOver(1)}>제품</li>
            <li onMouseOver={() => this.navMouseOver(2)}>러쉬 소개</li>
            <li>매장 안내</li>
            <li>스파</li>
            <li>이벤트</li>
            <li>고 네이키드</li>
          </ul>
          <ul className="navIcon">
            <li>
              <i className="fas fa-search"></i>
            </li>
            <li>
              <i className="fas fa-shopping-bag"></i>
            </li>
            <li>
              <i className="fas fa-user-circle"></i>
            </li>
          </ul>
        </nav>
        {currentId === -1 && null}
        {currentId === 1 && <CategoryProducts navList={navList} />}
        {currentId === 2 && <CategoryIntroduce />}
      </div>
    );
  }
}

export default Nav;
