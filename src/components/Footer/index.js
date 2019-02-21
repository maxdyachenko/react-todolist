import React from 'react';
import {DEFAULT_FILTER, ACTIVE_FILTER, COMPLETED_FILTER} from 'constants/index';

import './Footer.css';

const Footer = (props) => (
  <footer>
    <p>Show: </p>
    <button 
      className={props.activeFilter === DEFAULT_FILTER ? 'button active' : 'button'} 
      onClick={() => props.changeFilter(DEFAULT_FILTER)}
    >
      All
    </button>
    <button 
      className={props.activeFilter === ACTIVE_FILTER ? 'button active' : 'button'} 
      onClick={() => props.changeFilter(ACTIVE_FILTER)}
    >
      Active
    </button>
    <button           
      className={props.activeFilter === COMPLETED_FILTER ? 'button active' : 'button'} 
      onClick={() => props.changeFilter(COMPLETED_FILTER)}
    >
      Completed
    </button>
  </footer>
)

export default Footer;
