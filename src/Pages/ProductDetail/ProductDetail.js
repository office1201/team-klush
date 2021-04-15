import React, { Component } from 'react';
import Goods from './Component/Goods';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div className="ProductDetail">
        <Goods />
        <section className="plusReview">
          <div className="photoReview"></div>
          <div className="scoreContainer"></div>
        </section>
        <section className="detailContainer">
          <div className="tab"></div>
          <div className="detailHeader">
            <p>배쓰밤</p>
            <p>멜리진</p>
            <p>Melusine Bath Bomb</p>
          </div>

          <article className="innerTop">
            <img></img>
            <div class="review">
              <span>미리써본 후기</span>
              <span>★★★★★</span>
              <span>
                우디한 향수를 사랑하는 저는 입욕제를 사용할 때도 비슷한 계열의
                향기를 선호해요. 이 배쓰밤은 제 취향을 저격했답니다. 은은한
                향기뿐 아니라 해초가 선사하는 촉촉함도 빼놓을 수 없는 매력
                포인트에요.
              </span>
              <span>by 새미</span>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
