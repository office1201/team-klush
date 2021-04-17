import React, { Component } from 'react';
import Goods from './Component/Goods';
import ScoreReview from './Component/ScoreReview';
import Comment from './Component/mapping/Comment';
import ProductInfo from './Component/mapping/ProductInfo';
import Refund from './Component/mapping/Refund';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';
import './ProductDetail.scss';

class ProductDetail extends Component {
  state = {
    currentId: 1,
    changeColor: false,
  };

  handleComponent = id => {
    this.setState({
      currentId: id,
      // changeColor: !changeColor,
    });
  };
  render() {
    return (
      <div className="ProductDetail">
        <Goods />
        <section className="plusReview">
          <div className="photoReview">
            <span>Plus Review</span>
            <div className="inner">
              <p>포토 리뷰 모아보기</p>
              <div className="photoList">
                <div className="photoInfo">
                  정성가득 포토후기를 남겨주시면 깜짝 선물을 드려요!
                </div>
                <span className="moreTxt">더보기&gt;</span>
              </div>
            </div>
          </div>
          <div className="scoreContainer">
            <div className="average">
              <span>평가</span>
              <span>5</span>
              <span>★★★★★★</span>
            </div>
            <div className="counter">
              <ScoreReview />
              <ScoreReview />
              <ScoreReview />
            </div>
          </div>
        </section>
        <section className="detailContainer">
          <div className="tab">
            {CATEGORY.map((category, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => this.handleComponent(idx + 1)}
                  // className={idx % idx === 0 ? 'btnOn' : 'btnOff'}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div>{MAPPING_OBJ[this.state.currentId]}</div>
        </section>
      </div>
    );
  }
}

export default ProductDetail;

const MAPPING_OBJ = {
  1: <ProductInfo />,
  2: <Comment />,
  3: <Refund />,
};

const CATEGORY = ['상품상세정보', '상품후기', '상품배송'];
