import React from 'react';

import './Select.css';

const Select = (props) => (
  <div className="select-wrapper">
    <span>
      Show:
    </span>
    <select value={props.numberOfItems} onChange={(e) => props.changeNumberOfItems(e.target.value)}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  </div>
)

export default Select;
