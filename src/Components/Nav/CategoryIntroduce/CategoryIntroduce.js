import React, { Component } from 'react';

import './CategoryIntroduce.scss';

class CategoryIntroduce extends Component {
  render() {
    return (
      <div className="CategoryIntroduce">
        <div className="introduceContainer">
          <ul>
            <li>러쉬 소개</li>
            <li>러쉬 역사</li>
            <li>이념과 가치</li>
          </ul>
          <ul>
            <li>러쉬 이야기</li>
          </ul>
          <ul>
            <li>채러티 팟</li>
          </ul>
          <ul>
            <li>커뮤니티</li>
            <li>젤러티</li>
            <li>덕찌</li>
          </ul>
          <ul>
            <li>기업 선물</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CategoryIntroduce;
