import React, { Component } from 'react';

import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

import '../Cart/Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      product_quantity: 1,
      shoppingCarts: [],
      checked: false,
    };
  }
  inputValue = e => {
    const { value } = e.target;
    this.setState({
      product_quantity: value,
    });
  };
  addValue = event => {
    const { product_quantity, shoppingCarts } = this.state;
    let newCart = [...shoppingCarts];
    newCart[event.target.id].quantity += 1;
    if (shoppingCarts[event.target.id].quantity > 19) {
      return;
    }
    this.setState({
      product_quantity: product_quantity + 1,
      shoppingCarts: newCart,
    });
  };
  minusValue = () => {
    const { product_quantity } = this.state;
    if (product_quantity < 2) {
      return;
    }
    this.setState({
      product_quantity: product_quantity - 1,
    });
  };

  // checked = () => {};

  clickCheckBox = e => {
    const isChecked = !this.state.checked;
    this.setState({
      checked: isChecked,
    });
    console.log(this.state.checked);
  };

  componentDidMount() {
    fetch('http://10.58.2.24:8000/orders/cart', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.k8V9fYZNF2rrxKOSuD6rGL2QgVd1XOW-HnQOPuHoyiQ',
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          shoppingCarts: data.results,
        });
      });
  }

  render() {
    const { product_quantity, shoppingCarts } = this.state;
    console.log('a: ', this.state.shoppingCarts);
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
              <li>Order confirmed</li>
            </ul>
          </div>
          <div className="PriceProduct">
            <h2>제품</h2>
            <table>
              <thead className="thread">
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={this.clickCheckBox}
                      checked={this.checked}
                    />
                  </th>
                  <th>제품 정보</th>
                  <th>수량</th>
                  <th>금액</th>
                  <th>복지혜택</th>
                  <th>합계금액</th>
                  <th>배송비</th>
                </tr>
              </thead>
              <tbody>
                {shoppingCarts.length !== 0 &&
                  shoppingCarts.map((cart, index) => {
                    return (
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className="product">
                          <img src={cart.image} alt="" />
                          <div className="productInfo">
                            <h3>{cart.product_name}</h3>
                            <p>{cart.option}</p>
                            <p>{cart.sub_category_name}</p>
                          </div>
                        </td>
                        <td className="quantity">
                          <li>
                            <span className="count">
                              <button
                                className="minus"
                                onClick={this.minusValue}
                              >
                                -
                              </button>
                              <input
                                className="inputCount"
                                onChange={this.inputValue}
                                value={cart.quantity}
                              />
                              <button
                                className="plus"
                                id={index}
                                onClick={this.addValue}
                              >
                                +
                              </button>
                            </span>
                          </li>
                        </td>
                        <td>금액</td>
                        <td>복지혜택</td>
                        <td>합계금액</td>
                        <td rowSpan={cart.length - 1}>배송비 2,500원</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {/* {<div>장바구니에 담겨있는 상품이 없습니다.</div>} */}
            <div className="priceAll">
              <span>
                총 {} 개의 금액 {} 원 + 배송비 {} = 총 주문금액 {} 원
              </span>
            </div>
          </div>
          <button>선택 삭제</button>
          <div className="buttonContainer">
            <div className="shoppingContinue">쇼핑 계속하기</div>
            <div className="order">주문하기</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Cart;
