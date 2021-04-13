import React, { Component } from 'react';
import './Login.scss';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';

class Login extends Component {
  render() {
    return (
      <section className="login">
        <div className="loginContainer">
          <h2>로그인</h2>
          <form className="loginForm">
            <img
              src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_id.png"
              alt="아이디 이미지"
            />
            <input type="text" placeholder="아이디" className="inputId" />
            <input type="text" placeholder="비밀번호" className="inputPw" />
            <img
              src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_password.png"
              alt="비밀번호 이미지"
            />
            <div className="loginSave">
              <div className="save">
                <input type="checkbox" className="checkbox" id="saveId" />
                <label for="saveId">아이디 저장</label>
              </div>
            </div>
            <button className="loginBtn">
              <span>로그인</span>
            </button>
            <div className="loginMenu">
              <button className="btnMenu" id="btnJoinMember">
                회원가입
              </button>
              <button className="btnMenu" id="btnFindId">
                아이디 찾기
              </button>
              <button className="btnMenu" id="btnFindPw">
                비밀번호 찾기
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
