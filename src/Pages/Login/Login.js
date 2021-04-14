import React, { Component } from 'react';
import './Login.scss';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';

class Login extends Component {
  state = {
    loginId: '',
    password: '',
    isActiveBtn: false,
  };

  onInputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.checkLogin();
    });
  };

  checkLogin = () => {
    const { loginId, password } = this.state;
    this.setState({
      isActiveBtn: loginId.includes('@') && password.length >= 5,
    });
  };

  goToMain = () => {
    fetch('http://10.58.6.100:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        loginId: this.state.loginId,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          alert('로그인 성공!');
          this.props.history.push('/');
        } else {
          alert('로그인 실패');
        }
      });
  };

  render() {
    const { isActiveBtn } = this.state;
    return (
      <section className="login">
        <div className="loginContainer">
          <h2>로그인</h2>
          <form>
            <img
              src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_id.png"
              alt="아이디 이미지입니다"
            />
            <input
              onChange={this.onInputHandler}
              onKeyUp={this.checkLogin}
              type="text"
              placeholder="아이디"
              className="inputId"
              name="loginId"
            />
            <input
              onChange={this.onInputHandler}
              onKeyUp={this.checkLogin}
              type="password"
              placeholder="비밀번호"
              className="inputPw"
              name="password"
            />
            <img
              src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_password.png"
              alt="비밀번호 이미지입니다"
            />
            <div className="loginSave">
              <div className="save">
                <input type="checkbox" className="checkbox" id="saveId" />
                <label for="saveId">아이디 저장</label>
              </div>
            </div>
            <button
              onClick={this.goToMain}
              className={isActiveBtn ? 'isActiveBtn' : 'loginBtn'}
            >
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
