import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Card from './Component/Card';
import { PRODUCTS_API } from '../../config';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productLists: [],
      activeTab: 0,
    };
  }

  componentDidMount() {
    const { activeTab } = this.state;
    this.sortHandler(activeTab);
  }

  valueHandler = e => {
    this.setState(
      {
        activeTab: Number(e.target.value),
      },
      () => this.sortHandler(this.state.activeTab)
    );
  };

  sortHandler = activeTab => {
    fetch(`${PRODUCTS_API}&${SORT[activeTab]}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productLists: data.results,
        });
      });
    //Mockdata (서버 안될 시 사용)
    // fetch('/datas/productList.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       productLists: data,
    //     });
    //   });
  };

  render() {
    const { productLists } = this.state;
    return (
      <div>
        <Nav />
        <div className="productDetail">
          <div className="subVisual">
            <p className="mainTxt">SOAP</p>
            <p className="subTxt">향기를 머금은 거품으로 깨끗하게</p>
          </div>
          <div className="view">
            <div className="headBox">
              <div className="headName">
                <h1>솝</h1>
                <form>
                  <select name="sorting" onChange={this.valueHandler}>
                    <option value="0">낮은가격순</option>
                    <option value="1">높은가격순</option>
                  </select>
                </form>
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
                {productLists.map((product, idx) => {
                  return <Card key={idx} id={product.id} product={product} />;
                })}
              </ul>
            </section>
            <ul className="pageNation">
              <li>
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductList;

// const SORT = ['sort=productPrice_desc', 'sort=productPrice_asc'];
const SORT = ['ordering=priceAsc', 'ordering=priceDesc'];
