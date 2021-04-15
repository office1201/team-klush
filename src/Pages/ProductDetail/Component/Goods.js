import React, { Component } from 'react';
import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import './Goods.scss';

class Goods extends Component {

  render() {
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
                <span className="price">&#8361; 19,000</span>
              </li>
              <li>
                <strong>상품무게</strong>
                <span>200g</span>
              </li>
              <li>
                <strong>구매수량</strong>
                <span className="count">
                  <button className="minus">-</button>
                  <input className="inputCount" value={}></input>
                  <button className="plus">+</button>
                </span>
              </li>
            </ul>
            <div className="endPrice">
              <span className="totalTxt">총 합계 금액</span>
              <span className="totalPrice">&#8361; 15,000</span>
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
