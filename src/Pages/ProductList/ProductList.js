import React, { Component } from 'react';
import PrdLists from './Component/PrdLists';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productLists: [],
    };
  }

  componentDidMount() {
    fetch('/data/productListData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productLists: data,
        });
        // console.log(this.state.productLists);
      });
  }

  render() {
    const { productLists } = this.state;
    console.log(productLists);
    return (
      <div>
        <div className="productDetail">
          <div className="subVisual">
            <p className="mainTxt">SOAP</p>
            <p className="subTxt">향기를 머금은 거품으로 깨끗하게</p>
          </div>
          <div className="view">
            <div className="headBox">
              <div className="headName">
                <h1>솝</h1>
              </div>
              <ul>
                <li>솝(20)</li>
                <li>샤워젤&젤리(14)</li>
                <li>보디컨디셔너(4)</li>
                <li>샤워밤(3)</li>
                <li>샤워오일(1)</li>
                <li>스크럽&버터(9)</li>
              </ul>
            </div>
            <section>
              <ul>
                {productLists &&
                  productLists.map(product => {
                    return <PrdLists key={product.id} product={product} />;
                  })}
                <PrdLists />
              </ul>
            </section>
            <ul className="pageNation">
              <li>
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
