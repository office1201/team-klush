import React, { Component } from 'react';
import './Member.scss';

class Member extends Component {
  render() {
    return (
      <section>
        <div className="comment">
          <h1>product Reviews </h1>
          <p>나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
          <form>
            <div className="commentScore">
              <span>평가</span>
              <label>
                <input type="checkbox" />
                ★★★★★
              </label>
              <label>
                <input type="checkbox" />
                ★★★★☆
              </label>
              <label>
                <input type="checkbox" />
                ★★★☆☆
              </label>
              <label>
                <input type="checkbox" />
                ★★☆☆☆
              </label>
              <label>
                <input type="checkbox" />
                ★☆☆☆☆
              </label>
            </div>
            <div className="commentInputBox">
              <input className="commentInput" type="text" />
            </div>
            <div className="commentPersonInfo">
              <div className="commentPersonInfoBox">
                <span>작성자 :</span>
                <input className="whiter" type="text" />
                <span>패스워드 :</span>
                <input className="whiterPw" type="password" />
              </div>
              <button className="commentBtn">후기작성</button>
            </div>
            <div></div>
          </form>
        </div>
      </section>
    );
  }
}

export default Member;
