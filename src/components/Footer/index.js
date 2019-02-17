import React from 'react';
import {DEFAULT_FILTER, ACTIVE_FILTER, COMPLETED_FILTER} from 'constants/index';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Show: </p>
        <button 
          className={this.props.activeFilter === DEFAULT_FILTER ? 'active' : null} 
          onClick={() => this.props.changeFilter(DEFAULT_FILTER)}
        >
          All
        </button>
        <button 
          className={this.props.activeFilter === ACTIVE_FILTER ? 'active' : null} 
          onClick={() => this.props.changeFilter(ACTIVE_FILTER)}
        >
          Active
        </button>
        <button           
          className={this.props.activeFilter === COMPLETED_FILTER ? 'active' : null} 
          onClick={() => this.props.changeFilter(COMPLETED_FILTER)}
        >
          Completed
        </button>
      </footer>
    );
  }
}

export default Footer;
