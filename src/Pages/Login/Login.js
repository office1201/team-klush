import React, { Component } from 'react';
import './Login.scss';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  inputIdValidator = email => {
    if (email === '') return '';
    if (!email.includes('@')) return 'inputFail';
    if (email.includes('@')) return 'inputSuccess';
  };

  inputPwValidator = pw => {
    if (pw === '') return '';
    if (pw.length > 8) return 'inputSuccess';
    if (pw.length !== '') return 'inputFail';
  };

  buttonValidator = (email, pw) => {
    if (email.includes('@') && pw.length > 8) return 'btnSuccess';
    return '';
  };

  goToMain = () => {
    fetch('http://192.168.0.9:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        login_id: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          console.log('성공');
          this.props.history.push('/');
        } else {
          console.log('로그인 실패');
        }
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className="login">
        <div className="loginContainer">
          <h2>로그인</h2>
          <form>
            <div className="loginInput">
              <input
                onChange={this.handleInput}
                type="text"
                placeholder="아이디"
                className={`inputId ${this.inputIdValidator(email)}`}
                name="email"
              />
              <img
                src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_id.png"
                alt="아이디 이미지입니다"
              />
              <i
                class={`far fa-check-circle ${this.inputIdValidator(email)}`}
              />
            </div>
            <div className="loginInput">
              <input
                onChange={this.handleInput}
                type="password"
                placeholder="비밀번호"
                className={`inputId ${this.inputPwValidator(password)}`}
                name="password"
              />
              <img
                src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_password.png"
                alt="비밀번호 이미지입니다"
              />
              <i
                className={`far fa-check-circle ${this.inputPwValidator(
                  password
                )}`}
              />
            </div>
            <div className="loginSave">
              <div className="save">
                <label>
                  <input type="checkbox" className="checkbox" />
                  아이디 저장
                </label>
              </div>
            </div>
            <button
              onClick={this.goToMain}
              className={`loginBtn ${this.buttonValidator(email, password)}`}
            >
              <span>로그인</span>
            </button>
            <div className="loginMenu">
              <button className="btnMenu">회원가입</button>
              <button className="btnMenu">아이디 찾기</button>
              <button className="btnMenu">비밀번호 찾기</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
