import React, { Component } from 'react';
import './Member.scss';

class Member extends Component {
  state = {
    comment: '',
    commentList: [],
  };

  // 1. 인풋 값 받아오기
  handleInput = e => {
    const { value } = e.target;
    this.setState({ comment: value });
  };

  // 2. 화면 넘어가는 것 막고 -> 코멘트 추가 함수 실행
  onSubmitEnter = e => {
    e.preventDefault();
    if (e.key === 'Enter') this.handleAddComment();
  };

  // 3. 클릭 시 => 코멘트 추가만
  onSubmitClick = () => {
    this.handleAddComment();
  };

  // 4. 코멘트 추가
  handleAddComment = () => {
    const { commentList, comment } = this.state;
    this.setState(
      {
        commentList: [...commentList, { comment: comment }],
        comment: '',
      },
      () => console.log('commentList >>> ', this.state.commentList)
    );
  };

  render() {
    const { commentList } = this.state;
    return (
      <section>
        <div className="comment">
          <h1>product Reviews </h1>
          <p>나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
          <form onSubmit={this.onSubmitEnter} onKeyUp={this.onSubmitEnter}>
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
              <input
                onChange={this.handleInput}
                className="commentInput"
                type="text"
              />
            </div>
            <div className="commentPersonInfo">
              <div className="commentPersonInfoBox">
                <span>작성자 :</span>
                <input className="whiter" type="text" />
                <span>패스워드 :</span>
                <input className="whiterPw" type="password" />
              </div>
              <button className="commentBtn" onClick={this.onSubmitClick}>
                후기작성
              </button>
            </div>
          </form>
          <div>
            {commentList.map(comment => {
              return (
                <li>
                  <span>username</span>
                  <span>{comment.comment}</span>
                </li>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Member;
