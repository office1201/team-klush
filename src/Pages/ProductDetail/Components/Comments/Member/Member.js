import React, { Component } from 'react';
import './Member.scss';

class Member extends Component {
  state = {
    comment: '',
    commentList: [],
    dates: '',
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({ comment: value });
  };

  onSubmitEnter = e => {
    e.preventDefault();
    if (e.key === 'Enter') this.handleAddComment();
  };

  onSubmitClick = () => {
    this.handleAddComment();
  };

  handleAddComment = () => {
    const { commentList, comment } = this.state;
    const date = [
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ];
    this.setState(
      {
        commentList: [...commentList, { comment: comment }],
        comment: '',
        dates: date,
      },
      () => {
        alert('추가되었습니다.');
      }
    );
  };

  render() {
    const { commentList, dates } = this.state;
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
              <textarea
                onChange={this.handleInput}
                className="commentInput"
                type="text"
                placeholder="텍스트를 입력해 주세요."
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
          <div className="commentBoxes">
            {commentList.map(comment => {
              return (
                <>
                  <div className="commentBox">
                    <div className="summary">
                      <div className="star">★★★★★</div>
                      <div className="date">
                        <span>{`${dates[0]}.${dates[1]}.${dates[2]}.`}</span>
                      </div>
                      <div className="buyer">
                        <span>네이버페이 구매자</span>
                      </div>
                    </div>
                    <div className="contentContainer">
                      <div className="goodsBlock"></div>
                      <div className="goodsInfoReview">
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Member;
