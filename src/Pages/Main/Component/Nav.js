import React, { Component } from 'react';

import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import '../../Main/Component/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>KLUSH</h1>
        <ul>
          <li>제품</li>
          <li>러쉬 소개</li>
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
    );
  }
}

export default Nav;
