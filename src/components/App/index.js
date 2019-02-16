import React from 'react';
import List from 'components/List';
import Footer from 'components/Footer';
import Form from 'components/Form';

import './App.css';

const DEFAULT_VISIBLE_ITEMS = 5;

class App extends React.Component {
  state = {
    activeFilter: 'ALL',
    numberOfItems: DEFAULT_VISIBLE_ITEMS,
    numberOfVisibleItems: DEFAULT_VISIBLE_ITEMS,
    list: [
      {
        id: 0,
        status: 'ACTIVE',
        text: 'list item 1',
      },
      {
        id: 1,
        status: 'ACTIVE',
        text: 'list item 1',
      },
      {
        id: 2,
        status: 'COMPLETED',
        text: 'list item 2',
      },
      {
        id: 3,
        status: 'COMPLETED',
        text: 'list item 3',
      },
      {
        id: 4,
        status: 'ACTIVE',
        text: 'list item 4',
      },
      {
        id: 5,
        status: 'ACTIVE',
        text: 'list item 5',
      },
      {
        id: 6,
        status: 'ACTIVE',
        text: 'list item 6',
      },
      {
        id: 7,
        status: 'ACTIVE',
        text: 'list item 7',
      },
    ],
  };

  saveNewToDo = todo => {
    this.setState(prevState => ({
      list: [
        ...prevState.list, 
        {id: prevState.list.length, text: todo}
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
    this.setState( prevState => ({
      numberOfVisibleItems: prevState.numberOfVisibleItems + prevState.numberOfItems
    }))
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
