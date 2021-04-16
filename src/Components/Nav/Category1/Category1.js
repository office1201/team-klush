import React, { Component } from 'react';

import '../Category1/Category1.scss';
import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';

class Category1 extends Component {
  render() {
    const { navList } = this.props;
    return (
      <div className="category">
        <div className="categoryContainer">
          {navList &&
            navList.map(main => {
              return (
                <ul key={main.id}>
                  <li>{main.name}</li>
                  {main.sub_category &&
                    main.sub_category.map(sub => {
                      return <li key={sub.id}>{sub.name}</li>;
                    })}
                </ul>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Category1;
