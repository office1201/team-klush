import React, { Component } from 'react';
import './PrdLists.scss';

class PrdLists extends Component {
  handleInput = id => {
    // console.log('click');
    console.log(id);

    // this.goToDetail(value);
  };

  goToDetail = value => {
    fetch('api주소', {
      method: 'POST',
      body: JSON.stringify({
        id: value,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('결과:', data);
        if (data['MESSAGE'] === 'SUCCESS') {
          alert('성공!');
          this.props.history.push('/ProductDetail');
        }
      });
  };

  render() {
    const { product } = this.props;
    return (
      <div className="PrdLists">
        <li onClick={() => this.handleInput(product.id)} className={product.id}>
          <img src={product.img_url} alt="제품 사진" />
          <div className="conditionBox">
            {product.label.map(label => {
              // console.log(label);
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

export default PrdLists;
