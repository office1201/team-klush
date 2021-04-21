import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Goods from './Goods/Goods';
import ScoreReview from './Component/ScoreReview/ScoreReview';
import Comment from './Component/Comments/Comment';
import ProductInfo from './Component/ProductInfo/ProductInfo';
import Refund from './Component/Refund/Refund';
import './ProductDetail.scss';

class ProductDetail extends Component {
  state = {
    currentId: 0,
    productData: [],
  };

  componentDidMount() {
    fetch(`/datas/productData.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data.result[0],
        });
      });
  }
  handleComponent = idx => {
    this.setState({
      currentId: idx,
    });
  };
  render() {
    const { productData } = this.state;
    return (
      <div className="ProductDetail">
        <Nav />
        <Goods productData={productData} />
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
                  onClick={() => this.handleComponent(idx)}
                  className={idx === this.state.currentId ? 'Active' : ''}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div>{MAPPING_OBJ[this.state.currentId]}</div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ProductDetail;

const MAPPING_OBJ = {
  0: <ProductInfo />,
  1: <Comment />,
  2: <Refund />,
};

const CATEGORY = ['상품상세정보', '상품후기', '상품배송'];
