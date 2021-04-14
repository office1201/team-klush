import React, { Component } from 'react';
import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import './PrdLists.scss';

class PrdLists extends Component {
  render() {
    const { product } = this.props;
    // console.log(product);
    return (
      <div className="PrdLists">
        {product && (
          <li>
            <img src={product && product.imgSrc} alt="제품 사진" />
            <div className="conditionBox">
              <span className="new">new</span>
              <span className="best">best</span>
            </div>
            <div className="prdInfo">
              <span className="Name">{product && product.title}</span>
              <span className="hashtag">#{product && product.hashtag}</span>
              <span className="price">{product && product.price}</span>
            </div>
          </li>
        )}
      </div>
    );
  }
}

export default PrdLists;
