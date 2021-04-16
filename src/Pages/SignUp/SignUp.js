import React, { Component } from 'react';
import './SignUp.scss';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    passwordCheck: '',
    username: '',
    nickname: '',
    emailAdress: '',
    phone: '',
  };
  // 1. 함수1: 인풋 값 받아오기
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  // 2. 함수2: 아이디 검사
  idValidator = email => {
    if (email === '') return;
    if (email !== '' && !email.includes('@')) return 'inputFail';
    if (email.includes('@')) return 'inputSuccess';
  };
  // 3. 함수3: 비밀번호 검사
  pwValidatorOne = pw => {
    if (pw === '') return;
    if (pw.length <= 5) return 'inputFail';
    if (pw.length > 5) return 'inputSuccess';
  };
  // 4. 함수4: 비밀번호 확인 검사
  pwValidatorTwo = pwd => {
    if (pwd === '') return;
    if (pwd.length <= 5) return 'inputFail';
    if (pwd.length > 5) return 'inputSuccess';
  };
  // 5. 함수5: 이름(성함) 검사
  nameValidator = name => {
    if (name === '') return;
    if (name.length <= 1) return 'inputFail';
    if (name.length > 1) return 'inputSuccess';
  };
  // 6. 함수6: 닉네임 검사
  nicknameValidator = nickname => {
    if (nickname === '') return;
    if (nickname.length <= 1) return 'inputFail';
    if (nickname.length > 1) return 'inputSuccess';
  };
  // 7. 함수7: 이메일 검사
  emailValidator = emailAdress => {
    if (emailAdress === '') return;
    if (emailAdress !== '' && !emailAdress.includes('@')) return 'inputFail';
    if (emailAdress.includes('@')) return 'inputSuccess';
  };
  // 8. 함수8: 휴대폰 번호 검사
  phoneValidator = phone => {
    if (phone === '') return;
    if (phone.length <= 10) return 'inputFail';
    if (phone.length > 10) return 'inputSuccess';
  };
  // 9. 함수9: 회원가입 버튼 검사
  buttonValidator = (
    email,
    password,
    passwordCheck,
    username,
    nickname,
    emailAdress,
    phone
  ) => {
    if (
      email.includes('@') &&
      password.length > 5 &&
      passwordCheck.length > 5 &&
      username.length > 5 &&
      nickname.length > 1 &&
      emailAdress.includes('@') &&
      phone.length > 10
    )
      return 'activeBtn';
    return '';
  };
  render() {
    const {
      email,
      password,
      passwordCheck,
      username,
      nickname,
      emailAdress,
      phone,
    } = this.state;
    return (
      <section className="signUp">
        <div className="signInfo">
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
                {/* 1. 이메일 입력 검사하기*/}
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="email"
                  className={this.idValidator(email)}
                />
                <span className={`idError ${this.idValidator(email)}`}>
                  {email.includes('@')
                    ? '사용 가능한 이메일 입니다.'
                    : '이메일을 입력해 주세요.'}
                </span>
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>비밀번호</span>
              </div>
              <div className="tableInput">
                {/* 2. 비밀번호 입력 검사하기*/}
                <input
                  onChange={this.handleInput}
                  type="password"
                  name="password"
                  className={this.pwValidatorOne(password)}
                />
                <span className={`idError ${this.pwValidatorOne(password)}`}>
                  {password.length > 5
                    ? '사용 가능한 비밀번호 입니다.'
                    : '비밀번호를 입력해 주세요.(예: 5자리 이상)'}
                </span>
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>비밀번호 확인</span>
              </div>
              <div className="tableInput">
                {/* 3. 비밀번호 입력 확인 검사하기 */}
                <input
                  onChange={this.handleInput}
                  type="password"
                  name="passwordCheck"
                  className={this.pwValidatorTwo(passwordCheck)}
                />
                <span
                  className={`idError ${this.pwValidatorTwo(passwordCheck)}`}
                >
                  {passwordCheck.length > 5
                    ? '사용 가능한 비밀번호입니다.'
                    : '비밀번호를 입력해 주세요.(예: 5자리 이상)'}
                </span>
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>이름</span>
              </div>
              <div className="tableInput">
                {/* 4. 이름 검사하기*/}
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="username"
                  className={this.nameValidator(username)}
                />
                <span className={`idError ${this.nameValidator(username)}`}>
                  {username.length > 1
                    ? `사용 가능한 이름입니다.`
                    : '올바른 이름을 작성해 주세요.'}
                </span>
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>닉네임</span>
              </div>
              <div className="tableInput">
                {/* 5. 닉네임 검사하기 */}
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="nickname"
                  className={this.nicknameValidator(nickname)}
                />
                <span className={`idError ${this.nicknameValidator(nickname)}`}>
                  {nickname.length > 1
                    ? `사용 가능한 닉네임입니다.`
                    : '올바른 이름을 작성해 주세요.'}
                </span>
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>이메일</span>
              </div>
              <div className="tableInput">
                {/* 6. 이메일 검사히기 */}
                <input
                  onChange={this.handleInput}
                  type="email"
                  name="emailAdress"
                  className={this.emailValidator(emailAdress)}
                />
                <span className={`idError ${this.emailValidator(emailAdress)}`}>
                  {emailAdress.includes('@')
                    ? '사용 가능한 이메일 주소입니다.'
                    : '이메일 주소를 입력해 주세요.'}
                </span>
              </div>
            </li>
            <li className="table">
              <div className="tableName">
                <span className="tableIcon">■</span>
                <span>휴대폰번호</span>
              </div>
              {/* 7. 휴대폰 검사하기 */}
              <div className="tableInput">
                <input
                  onChange={this.handleInput}
                  type="text"
                  placeholder="- 없이 입력하세요."
                  name="phone"
                  className={this.phoneValidator(phone)}
                />
                <span className={`idError ${this.phoneValidator(phone)}`}>
                  {phone.length > 10
                    ? '사용 가능한 휴대폰 번호입니다.'
                    : '올바른 이름을 작성해 주세요.'}
                </span>
              </div>
            </li>
          </ul>
          <li className="signBtn">
            <button
              className={`btn ${this.buttonValidator(
                email,
                password,
                passwordCheck,
                username,
                nickname,
                emailAdress,
                phone
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
