import React from 'react';

import './ListItem.css';

class ListItem extends React.Component {
  handleStatusChange = (id) => {
    if (this.props.status === 'COMPLETED') {
      this.props.changeStatus(id, 'ACTIVE');
    } else {
      this.props.changeStatus(id, 'COMPLETED');
    }
  }
  render() {
    return (
      <li className="list-item">
        <div className="list-item-wrapper">
          <p className="text">{this.props.text}</p>
          <div className="controls">
            <button onClick={() => this.props.removeTodo(this.props.id)}>Remove</button>
            <button onClick={() => this.handleStatusChange(this.props.id)}>
              Mark as {this.props.status === 'COMPLETED' ? 'active' : 'completed'}
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
