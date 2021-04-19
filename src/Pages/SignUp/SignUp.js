import React, { Component } from 'react';
import SignUpList from './Components/SignUpList/SignUpList';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    id: '',
    pw: '',
    pwCheck: '',
    username: '',
    nickname: '',
    emailAdress: '',
    phoneNumber: '',
    signUpList: [],
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  idValidator = id => {
    if (id === '') return;
    if (id !== '' && !id.includes('@')) return 'inputFail';
    if (id.includes('@')) return 'inputSuccess';
  };

  pwValidatorOne = pw => {
    if (pw === '') return;
    if (pw.length <= 5) return 'inputFail';
    if (pw.length > 5) return 'inputSuccess';
  };

  pwValidatorTwo = pwCheck => {
    if (pwCheck === '') return;
    if (pwCheck.length <= 5) return 'inputFail';
    if (pwCheck.length > 5) return 'inputSuccess';
  };

  nameValidator = username => {
    if (username === '') return;
    if (username.length <= 1) return 'inputFail';
    if (username.length > 1) return 'inputSuccess';
  };

  nicknameValidator = nickname => {
    if (nickname === '') return;
    if (nickname.length <= 1) return 'inputFail';
    if (nickname.length > 1) return 'inputSuccess';
  };

  emailValidator = emailAdress => {
    if (emailAdress === '') return;
    if (emailAdress !== '' && !emailAdress.includes('@')) return 'inputFail';
    if (emailAdress.includes('@')) return 'inputSuccess';
  };

  phoneValidator = phoneNumber => {
    if (phoneNumber === '') return;
    if (phoneNumber.length <= 10) return 'inputFail';
    if (phoneNumber.length > 10) return 'inputSuccess';
  };

  buttonValidator = (
    id,
    pw,
    pwCheck,
    username,
    nickname,
    emailAdress,
    phoneNumber
  ) => {
    if (
      id.includes('@') &&
      pw.length > 5 &&
      pwCheck.length > 5 &&
      username.length > 5 &&
      nickname.length > 1 &&
      emailAdress.includes('@') &&
      phoneNumber.length > 10
    )
      return 'activeBtn';
    return '';
  };

  checkLogin = e => {
    const { id, pw, username, nickname, emailAdress, phoneNumber } = this.state;
    e.preventDefault();
    fetch('http://10.58.2.24:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        account_name: id,
        password: pw,
        name: username,
        nickname: nickname,
        email: emailAdress,
        phone_number: phoneNumber,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과:', result));
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/SignUpList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          signUpList: data,
        });
      });
  }
  render() {
    const {
      id,
      pw,
      pwCheck,
      username,
      nickname,
      emailAdress,
      phoneNumber,
      signUpList,
    } = this.state;
    return (
      <section className="signup">
        <div className="signupInfo">
          <h2 className="singupInfoTitle">JOIN US</h2>
          <div className="signupInfoDescription">
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
            {signUpList.map(comment => {
              return (
                <SignUpList
                  key={comment.id}
                  type={comment.type}
                  title={comment.title}
                  placeholder={comment.placeholder}
                  handleInput={this.handleInput}
                  idValidator={this.idValidator(this.state.id)}
                />
              );
            })}
          </ul>
          <li className="signBtn">
            <button
              onClick={this.checkLogin}
              className={`btn ${this.buttonValidator(
                id,
                pw,
                pwCheck,
                username,
                nickname,
                emailAdress,
                phoneNumber
              )}`}
            >
              회원가입
            </button>
          </li>
        </form>
      </section>
    );
  }
}

export default SignUp;
