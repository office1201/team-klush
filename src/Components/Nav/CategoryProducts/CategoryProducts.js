import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import '../CategoryProducts/CategoryProducts.scss';
import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';

class CategoryProducts extends Component {
  goToProductList = (mainIdx, subIdx) => {
    if (mainIdx === 3 && subIdx === 1) {
      this.props.history.push(`/productList`);
    }
  };
  render() {
    const { navList } = this.props;
    return (
      <div className="CategoryProducts">
        <div className="categoryContainer">
          {navList &&
            navList.map((main, mainIdx) => {
              return (
                <ul key={main.id}>
                  <li>{main.name}</li>
                  {main.sub_categories.map((sub, subIdx) => {
                    return (
                      <li
                        onClick={() => this.goToProductList(mainIdx, subIdx)}
                        key={sub.id}
                      >
                        {sub.name}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryProducts);
