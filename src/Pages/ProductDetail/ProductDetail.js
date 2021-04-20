import React, { Component } from 'react';
import './ProductDetail.scss';
import '../../Styles/common.scss';
import Comments from './Components/Comments/Comments';

class ProductDetail extends Component {
  render() {
    return (
      <div className="productDetail">
        <div className="goods"></div>
        <Comments />
      </div>
    );
  }
}

export default ProductDetail;
