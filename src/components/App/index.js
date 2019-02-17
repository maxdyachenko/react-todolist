import React from 'react';
import List from 'components/List';
import Footer from 'components/Footer';
import Form from 'components/Form';
import {DEFAULT_VISIBLE_ITEMS, DEFAULT_FILTER, ACTIVE_FILTER} from 'constants/index';

import './App.css';

class App extends React.Component {
  state = {
    activeFilter: DEFAULT_FILTER,
    numberOfItems: DEFAULT_VISIBLE_ITEMS,
    numberOfVisibleItems: DEFAULT_VISIBLE_ITEMS,
    list: [],
  };

  saveNewToDo = todo => {
    console.log(ACTIVE_FILTER);
    this.setState(prevState => ({
      list: [
        ...prevState.list, 
        {id: prevState.list.length, text: todo, status: ACTIVE_FILTER}
      ],
    }));
  };

  changeStatus = (id, status) => {
    this.setState(prevState => ({
      list: prevState.list.map(item => {
        if (item.id === id) {
          return {
            ...item, 
            status
          }
        }
        return item;
      }), 
    }))
  }

  removeTodo = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(item => item.id !== id)
    }))
  }

  changeFilter = filter => {
    this.setState({
      activeFilter: filter,
      numberOfItems: DEFAULT_VISIBLE_ITEMS,
      numberOfVisibleItems: DEFAULT_VISIBLE_ITEMS,
    })
  }

  changeNumberOfItems = number => {
    this.setState({
      numberOfItems: Number(number),
      numberOfVisibleItems: Number(number)
    })
  }

  showNextItems = () => {
    console.log(this.state.numberOfVisibleItems);
    console.log(this.state.numberOfItems);
    this.setState({
      numberOfVisibleItems: this.state.numberOfVisibleItems + this.state.numberOfItems
    })
  }

  render() {
    return (
      <main>
        <h1>React Todo App</h1>
        <Form saveNewToDo={this.saveNewToDo} />
        <List 
          numberOfItems={this.state.numberOfItems}
          numberOfVisibleItems={this.state.numberOfVisibleItems}
          changeNumberOfItems={this.changeNumberOfItems}
          list={this.state.list} 
          activeFilter={this.state.activeFilter}
          changeStatus={this.changeStatus}
          removeTodo={this.removeTodo} 
          showNextItems={this.showNextItems}
        />
        <Footer changeFilter={this.changeFilter} activeFilter={this.state.activeFilter}/>
      </main>
    );
  }
}

export default App;
