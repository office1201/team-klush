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
        <li>
          <img src={product.img_url} alt="제품 사진" />
          <div className="conditionBox">
            {product.map(product => {
              return <span className={product.label[0]}></span>;
            })}
          </div>
          <div className="prdInfo">
            <span className="Name">{product.name}</span>
            <span className="hashtag">{product.description}</span>
            <span className="price">{product.price}</span>
          </div>
        </li>
      </div>
    );
  }
}

export default PrdLists;
