import React, { Component } from 'react';

import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

import '../Cart/Cart.scss';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <Nav />
        <main>
          <div className="shoppingCart">
            <h1>SHOPPING CART</h1>
            <ul className="shoppingStep">
              <l1>Cart</l1>
              <li>
                <i className="fas fa-chevron-right"></i>
              </li>
              <l1>Order</l1>
              <li>
                <i className="fas fa-chevron-right"></i>
              </li>
              <l1>Order confirmed</l1>
            </ul>
          </div>
          {/* <section> */}
          <div className="PriceProduct">
            <h2>제품</h2>
            <div className="selectedProducts">
              <div className="thread">
                <ul>
                  <l1>
                    <input type="checkbox" />
                  </l1>
                  <l1>제품 정보</l1>
                  <l1>수량</l1>
                  <l1>금액</l1>
                  <l1>복지혜택</l1>
                  <l1>합계금액</l1>
                  <l1>배송비</l1>
                </ul>
              </div>
              <div className="body">
                <ul>
                  <l1>
                    <input type="checkbox" />
                  </l1>
                  <l1></l1>
                  <l1></l1>
                  <l1></l1>
                  <l1></l1>
                  <l1></l1>
                  <l1></l1>
                </ul>
              </div>
            </div>
            {/* {<div>장바구니에 담겨있는 상품이 없습니다.</div>} */}
            <div className="priceAll">
              <span>
                총 {} 개의 금액 {} 원 + 배송비 {} = 총 주문금액 {} 원
              </span>
            </div>
          </div>
          <button>선택 삭제</button>
          {/* </section> */}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Cart;
