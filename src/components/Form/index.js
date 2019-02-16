import React from 'react';

import './Form.css';

class Form extends React.Component {
  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveNewToDo(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default Form;
