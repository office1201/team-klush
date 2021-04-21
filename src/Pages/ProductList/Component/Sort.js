import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
      <div className="Sort">
        <form>
          <select name="sorting">
            <option>낮은가격순</option>
            <option>높은가격순</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Sort;
