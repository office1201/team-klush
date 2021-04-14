import React, { Component } from 'react';

import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import '../../Main/Component/Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isMouseover: false,
    };
  }

  navMouseOver = () => {
    this.setState({
      isMouseover: true,
    });
  };

  navMouseout = () => {
    this.setState({
      isMouseover: false,
    });
  };

  render() {
    const { isMouseover } = this.state;
    return (
      <div>
        <nav>
          <h1>KLUSH</h1>
          <ul>
            <li onMouseOver={this.navMouseOver} onMouseOut={this.navMouseout}>
              제품
            </li>
            <li onMouseOver={this.navMouseOver} onMouseOut={this.navMouseout}>
              러쉬 소개
            </li>
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
        <div className={isMouseover ? 'category' : 'notCategory'}>
          <div className="categoryContainer">
            <ul>
              <li>베스트</li>
              <li>주간 베스트</li>
              <li>별 다섯개 후기</li>
              <li>온라인 전용</li>
              <li>국내 제조</li>
              <li>네이키드</li>
              <li>홈 스파</li>
            </ul>
            <ul>
              <li>솝</li>
              <li>샤워젤&젤리</li>
              <li>보디 컨디셔너</li>
              <li>샤워 밤</li>
              <li>샤워 오일</li>
              <li>스크럽&버터</li>
              <li>펀</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
