import React from 'react';

import './Select.css';

class Select extends React.Component {
  render() {
    return (
      <div className="select-wrapper">
        <span>
          Show:
        </span>
        <select value={this.props.numberOfItems} onChange={(e) => this.props.changeNumberOfItems(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    );
  }
}

export default Select;
