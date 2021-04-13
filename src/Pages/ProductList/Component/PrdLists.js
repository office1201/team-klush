import React, { Component } from 'react';
import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import './PrdLists.scss';

class PrdLists extends Component {
  render() {
    // const { soap } = this.props;
    return (
      <div className="PrdLists">
        <li>
          <img
            src="https://res.cloudinary.com/lush/image/upload/s--h8PceQdz--/c_fill,h_200,q_jpegmini,w_200/v1/lush_content/products/main/2021/02/web_avo_good_soap_2021.jpg?itok=Wm_D827U"
            alt="아보 굿 이스터"
          />
          <div className="conditionBox">
            <span className="new">new</span>
            <span className="best">best</span>
          </div>
          <div className="prdInfo">
            <span className="Name">아보 굿 이스터</span>
            <span className="hashtag">#솝 #오래 쓸 수 있는</span>
            <span className="price">23000원</span>
          </div>
        </li>
      </div>
    );
  }
}

export default PrdLists;
