import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Cards.scss';

class Card extends Component {
  goToDetail = () => {
    this.props.history.push(`/productDetail/${this.props.id}`);
  };

  render() {
    const { product } = this.props;
    console.log(this.props.id);

    return (
      <div className="Cards">
        <li onClick={this.goToDetail} className={product.id}>
          <img src={product.img_url} alt="제품 사진" />
          <div className="conditionBox">
            {product.label.map(label => {
              return (
                <React.Fragment key={label}>
                  {label.type === 'new' && <span className="new">New</span>}
                  {label.type === 'best' && <span className="best">Best</span>}
                  {label.type === 'vegun' && (
                    <span className="vegun">Vegun</span>
                  )}
                </React.Fragment>
              );
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

export default withRouter(Card);
