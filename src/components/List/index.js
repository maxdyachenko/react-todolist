import React from 'react';
import ListItem from './components/ListItem';
import Select from './components/Select';

import {DEFAULT_FILTER} from 'constants/index';

import './List.css';

class List extends React.Component {
  getArrayList = () => {
    let index = 0;
    return this.props.list.filter( (listitem) => {
      if ( (this.props.activeFilter === DEFAULT_FILTER || listitem.status === this.props.activeFilter) 
        && index < this.props.numberOfVisibleItems) {
        index += 1;
        return (
          <ListItem 
            key={listitem.id} 
            id={listitem.id} 
            text={listitem.text} 
            removeTodo={this.props.removeTodo} 
            markAsCompleted={this.props.markAsCompleted}  
          />
        )
      }
    })
  }

  getTotalCountOfList = () => {
    return this.props.list.reduce((counter, listitem) => {
      if (this.props.activeFilter === DEFAULT_FILTER || listitem.status === this.props.activeFilter) {
        return counter + 1; 
      }

      return counter;
    }, 0)
  }

  isItemsAvailable = () => {
    if (this.getTotalCountOfList() - this.props.numberOfVisibleItems > 0) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div className="list-wrapper">
        <Select numberOfItems={this.props.numberOfItems} changeNumberOfItems={this.props.changeNumberOfItems} />
        <ul>
          {this.getArrayList().map(listitem => (
            <ListItem 
              key={listitem.id} 
              id={listitem.id} 
              text={listitem.text} 
              status={listitem.status}
              removeTodo={this.props.removeTodo} 
              changeStatus={this.props.changeStatus}
            />
          ))}
          <div className="list-footer">
            {this.isItemsAvailable() && <button onClick={this.props.showNextItems}>Show next {this.props.numberOfItems}</button>}
            <p>Total items: {this.getTotalCountOfList()}</p>
          </div>
        </ul>
      </div>
    );
  }
}

export default List;
