import React, { Component } from 'react';

import Nav from '../../Components/Nav/Nav';

import '../Cart/Cart.scss';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <Nav />
      </div>
    );
  }
}

export default Cart;
