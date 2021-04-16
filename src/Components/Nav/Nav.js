import React, { Component } from 'react';

import Category1 from '../Nav/Category1/Category1';
import Category2 from '../Nav/Category2/Category2';

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
    fetch('/data/navdata.json')
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
      <div onMouseLeave={this.navMouseLeave}>
        <nav>
          <h1>KLUSH</h1>
          <ul>
            <li onMouseOver={() => this.navMouseOver(1)}>제품</li>
            <li onMouseOver={() => this.navMouseOver(2)}>러쉬 소개</li>
            <li>매장 안내</li>
            <li>스파</li>
            <li>이벤트</li>
            <li>고 네이키드</li>
          </ul>
          <ul className="navIcon">
            <li>
              <i class="fas fa-search"></i>
            </li>
            <li>
              <i class="fas fa-shopping-bag"></i>
            </li>
            <li>
              <i class="fas fa-user-circle"></i>
            </li>
          </ul>
        </nav>
        {currentId === -1 && null}
        {currentId === 1 && <Category1 navList={navList} />}
        {currentId === 2 && <Category2 />}
      </div>
    );
  }
}

export default Nav;
