import React, { Component } from 'react';

class ProductWeight extends Component {
  render() {
    return (
      <div className="ProductWeight">
        <li>
          <strong>용량</strong>
          <form>
            <select name="wight">
              <option value="none">=옵션:가격=</option>
              <option value="100">100g</option>
              <option value="250">250g</option>
              <option value="500">500g</option>
            </select>
          </form>
        </li>
      </div>
    );
  }
}

export default ProductWeight;
