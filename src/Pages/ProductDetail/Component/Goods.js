import React, { Component } from 'react';
import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import './Goods.scss';

class Goods extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      price: 15000,
    };
  }

  inputValue = e => {
    const { value } = e.target;
    this.setState({
      value: value,
    });
  };

  addValue = () => {
    const { value } = this.state;
    if (value > 19) {
      return;
    }
    this.setState({
      value: value + 1,
    });
  };

  minusValue = () => {
    const { value } = this.state;

    if (value < 2) {
      return;
    }
    this.setState({
      value: value - 1,
    });
  };

  render() {
    const { value, price } = this.state;
    return (
      <div>
        <section className="Goods">
          <div>
            <div className="mainImage">
              <img
                src="https://cdn.pixabay.com/photo/2016/01/14/09/21/handmade-1139554_960_720.jpg"
                alt="제품 상단 이미지"
              />
            </div>
            <div className="imgSlide">
              <ul>
                <li>
                  {/* <img
                    src="https://cdn.pixabay.com/photo/2016/01/14/09/21/handmade-1139554_960_720.jpg"
                    alt="제품 슬라이드 이미지"
                  /> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="infoWrap">
            <div className="goodsTitle">
              <div className="title">
                <span>멜리진</span>
                <button>
                  <i class="far fa-heart"></i>
                </button>
              </div>
              <p>#배쓰밤 #해초의부드러움</p>
            </div>
            <span>Good to Know </span>
            <button className="goodKnow">?</button>
            <ul className="pwBox">
              <li>
                <strong>판매가</strong>
                <span className="price">&#8361;{price.toLocaleString()}</span>
              </li>
              <li>
                <strong>상품무게</strong>
                <span>200g</span>
              </li>
              <li>
                <strong>구매수량</strong>
                <span className="count">
                  <button className="minus" onClick={this.minusValue}>
                    -
                  </button>
                  <input
                    className="inputCount"
                    onChange={this.inputValue}
                    value={this.state.value}
                  ></input>
                  <button className="plus" onClick={this.addValue}>
                    +
                  </button>
                </span>
              </li>
            </ul>
            <div className="endPrice">
              <span className="totalTxt">총 합계 금액</span>
              <span className="totalPrice">
                &#8361; {(price * value).toLocaleString()}
              </span>
            </div>
            <div className="buyBtn">
              <a>
                <span>장바구니</span>
              </a>
              <a>
                <span>주문하기</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Goods;
