import React, { Component } from 'react';

class Comment extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="commentBox">
        <div className="summary">
          {/* <div className="star">★★★★★</div> */}
          <div className="date">
            {/* <span>{`${dates[0]}.${dates[1]}.${dates[2]}.`}</span> */}
          </div>
          <div className="buyer">{/* <span>네이버페이 구매자</span> */}</div>
        </div>
        <div className="contentContainer">
          <div className="goodsBlock"></div>
          <div className="goodsInfoReview">
            {/* <p>{comment.comment}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
