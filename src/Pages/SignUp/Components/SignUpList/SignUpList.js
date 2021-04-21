import React, { Component } from 'react';

class SignUpList extends Component {
  render() {
    const {
      index,
      type,
      title,
      name,
      placeholder,
      validator,
      stateName,
    } = this.props;
    return (
      <li className="table">
        <div className="tableName">
          <span className="tableIcon">■</span>
          <span>{this.props.title}</span>
        </div>
        <div className="tableInput">
          <input
            className={validator(stateName)}
            onChange={e => this.props.handleInput(index, e)}
            type={type}
            title={title}
            name={name}
            placeholder={placeholder}
          />
          <span className={`idError ${validator(stateName)}`}>
            {validateResult(type, validator(stateName))}
          </span>
        </div>
      </li>
    );
  }
}

export default SignUpList;

const validateResult = (type, result) => {
  if (result === '') return '';

  const resultTable = {
    email: {
      inputFail: '이메일을 확인해주세요.',
      inputSuccess: '사용 가능한 이메일입니다.',
    },
    password: {
      inputFail: '패스워드를 확인해주세요.',
      inputSuccess: '사용 가능한 패스워드입니다.',
    },
    username: {
      inputFail: '올바른 이름을 작성해 주세요..',
      inputSuccess: '사용 가능한 이름입니다.',
    },
    nickname: {
      inputFail: '올바른 닉네임을 작성해 주세요.',
      inputSuccess: '사용 가능한 닉네임입니다.',
    },
    emailAdress: {
      inputFail: '올바른 이메일 주소를 작성해 주세요.',
      inputSuccess: '사용 가능한 이메일 주소입니다.',
    },
    phoneNumber: {
      inputFail: '올바른 휴대폰 번호를 작성해 주세요.',
      inputSuccess: '사용 가능한 번호입니다.',
    },
  };

  return resultTable?.[type]?.[result];
};
