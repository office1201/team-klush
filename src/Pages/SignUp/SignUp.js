import React, { Component } from 'react';
import SignUpList from './Components/SignUpList/SignUpList';
import { SIGNUP_API } from '../../config';
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
  };

  handleInput = (index, e) => {
    const { value } = e.target;
    let name = '';
    if (index === 0) name = 'id';
    if (index === 1) name = 'pw';
    if (index === 2) name = 'pwCheck';
    if (index === 3) name = 'username';
    if (index === 4) name = 'nickname';
    if (index === 5) name = 'emailAdress';
    if (index === 6) name = 'phoneNumber';

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
    fetch(`${SIGNUP_API}`, {
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
      .then(response => {
        console.log(response);
        if (response.MESSAGE === 'SUCCESS') {
          alert('로그인 성공');
          this.props.history.push('/');
        } else {
          alert('로그인 실패');
        }
      });
  };

  mapValidatorToIndex = {
    0: this.idValidator,
    1: this.pwValidatorOne,
    2: this.pwValidatorTwo,
    3: this.nameValidator,
    4: this.nicknameValidator,
    5: this.emailValidator,
    6: this.phoneValidator,
  };

  mapStateToIndex = {
    0: 'id',
    1: 'pw',
    2: 'pwCheck',
    3: 'username',
    4: 'nickname',
    5: 'emailAdress',
    6: 'phoneNumber',
  };

  render() {
    const {
      id,
      pw,
      pwCheck,
      username,
      nickname,
      emailAdress,
      phoneNumber,
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
            {signUpList.map((comment, index) => {
              return (
                <SignUpList
                  key={comment.id}
                  index={index}
                  type={comment.type}
                  title={comment.title}
                  placeholder={comment.placeholder}
                  handleInput={this.handleInput}
                  validator={this.mapValidatorToIndex[index]}
                  stateName={this.state[this.mapStateToIndex[index]]}
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

const signUpList = [
  {
    id: 1,
    type: 'text',
    title: '아이디',
    placeholder: null,
  },
  {
    id: 2,
    type: 'password',
    title: '비밀번호',
    placeholder: null,
  },
  {
    id: 3,
    type: 'password',
    title: '비밀번호 확인',
    placeholder: null,
  },
  {
    id: 4,
    type: 'text',
    title: '이름',
    placeholder: null,
  },
  {
    id: 5,
    type: 'text',
    title: '닉네임',
    placeholder: null,
  },
  {
    id: 6,
    type: 'email',
    title: '이메일',
    placeholder: null,
  },
  {
    id: 7,
    type: 'text',
    title: '휴대폰 번호',
    placeholder: '- 없이 입력하세요.',
  },
];
