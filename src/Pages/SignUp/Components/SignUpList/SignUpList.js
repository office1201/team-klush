import React, { Component } from 'react';

class SignUpList extends Component {
  render() {
    return (
      <li className="table">
        <div className="tableName">
          <span className="tableIcon">■</span>
          <span>{this.props.title}</span>
        </div>
        <div className="tableInput">
          <input
            onChange={this.props.handleInput}
            type={this.props.type}
            title={this.props.title}
            name={this.props.name}
            placeholder={this.props.placeholder}
            className={this.idValidator}
          />
          {/* <span className={`idError ${this.idValidator(account_name)}`}>
            {account_name.includes('@')
              ? '사용 가능한 이메일 입니다.'
              : '이메일을 입력해 주세요.'}
          </span> */}
        </div>
      </li>
    );
  }
}

export default SignUpList;
