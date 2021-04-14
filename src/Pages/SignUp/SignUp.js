import React, { Component } from 'react';
import './SignUp.scss';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';

class SignUp extends Component {
  render() {
    return (
      <section className="signUp">
        <div className="signUpTitle">
          <h2>JOIN US</h2>
          <div>
            <span>약관동의</span>
            <span>＞</span>
            <span>정보입력</span>
            <span>＞</span>
            <span>가입완료</span>
          </div>
        </div>
        <form className="signForm">
          <div className="signFormInfo">
            <h3>기본정보</h3>
            <p>
              <span>■</span>표시는 반드시 입력하셔야 하는 항목입니다.
            </p>
          </div>
          <ul className="signFormTable">
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>아이디</span>
              </div>
              <div className="tableInput">
                <input type="text" />
                <span className="idError">사용가능한 아이디입니다</span>
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>비밀번호</span>
              </div>
              <div className="tableInput">
                <input type="password" />
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>비밀번호 확인</span>
              </div>
              <div className="tableInput">
                <input type="password" />
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>이름</span>
              </div>
              <div className="tableInput">
                <input type="text" />
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>닉네임</span>
              </div>
              <div className="tableInput">
                <input type="text" />
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>이메일</span>
              </div>
              <div className="tableInput">
                <input type="email" />
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>휴대폰번호</span>
              </div>
              <div className="tableInput">
                <input type="text" placeholder="- 없이 입력하세요." />
              </div>
            </li>
          </ul>
          <li className="signUpBtn">
            <button className="btn">회원가입</button>
          </li>
        </form>
      </section>
    );
  }
}

export default SignUp;
