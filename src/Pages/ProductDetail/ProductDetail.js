import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Goods from './Goods/Goods';
import ScoreReview from './Component/ScoreReview/ScoreReview';
import ProductInfo from './Component/ProductInfo/ProductInfo';
import Refund from './Component/Refund/Refund';
import Member from './Components/Comments/Member/Member';
import { PRDDETAIL_API } from '../../config';
import './ProductDetail.scss';
import '../../Styles/common.scss';

class ProductDetail extends Component {
  state = {
    currentId: 0,
    productData: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch(`${PRDDETAIL_API}/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data.results[0],
        });
      });
    // fetch(`/datas/productData.json`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       productData: data.results[0],
    //     });
    //   });
  }

  handleComponent = idx => {
    this.setState({
      currentId: idx,
    });
  };

  render() {
    const { productData } = this.state;
    console.log(productData.product_rate);
    const MAPPING_OBJ = {
      0: productData.product_hashtag && (
        <ProductInfo productData={productData} />
      ),
      1: productData.product_hashtag && <Member productData={productData} />,
      2: <Refund />,
    };
    return (
      <div className="ProductDetail">
        <Nav />
        {productData.product_hashtag && <Goods productData={productData} />}
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
              <span>{productData.product_rate}</span>
              <span>
                {productData.product_rate === 5 ? '★★★★★' : null}
                {productData.product_rate === 4 ? '★★★★' : null}
                {productData.product_rate === 3 ? '★★★' : null}
                {productData.product_rate === 2 ? '★★' : null}
                {productData.product_rate === 1 ? '★' : null}
              </span>
            </div>
            <div className="counter">
              <ScoreReview />
              <ScoreReview />
              <ScoreReview />
            </div>
          </div>
        </section>
        <section className="detailContainer korean">
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

const CATEGORY = ['상품상세정보', '상품후기', '상품배송'];
