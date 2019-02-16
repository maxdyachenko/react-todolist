import React from 'react';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Show: </p>
        <button 
          className={this.props.activeFilter === 'ALL' ? 'active' : null} 
          onClick={() => this.props.changeFilter('ALL')}
        >
          All
        </button>
        <button 
          className={this.props.activeFilter === 'ACTIVE' ? 'active' : null} 
          onClick={() => this.props.changeFilter('ACTIVE')}
        >
          Active
        </button>
        <button           
          className={this.props.activeFilter === 'COMPLETED' ? 'active' : null} 
          onClick={() => this.props.changeFilter('COMPLETED')}
        >
          Completed
        </button>
      </footer>
    );
  }
}

export default Footer;
