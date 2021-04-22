import React, { Component } from 'react';

class Comment extends Component {
  rateValidator = star => {
    if (star === 5) return `★★★★★`;
    if (star === 4) return `★★★★`;
    if (star === 3) return `★★★`;
    if (star === 2) return `★★`;
    if (star === 1) return `★`;
  };

  render() {
    const { commentList, star } = this.props;
    return (
      <>
        <div className="commentBoxes">
          <div className="commentBox">
            <div className="summary">
              <div className="star">{this.rateValidator(star)}</div>
              <div className="date">
                <span>{commentList.created_at.slice(0, 10)}</span>
              </div>
              <div className="buyer">
                <span>네이버페이 구매자</span>
              </div>
            </div>
            <div className="contentContainer">
              <div className="goodsBlock"></div>
              <div className="goodsInfoReview">
                <p>{commentList.content}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Comment;
