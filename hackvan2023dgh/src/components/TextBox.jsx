import React, { Component } from 'react';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            id="value"
            name="value"
            value={this.state.value}
            onChange={this.handleInputChange}
            required
          />
        </div>
      </form>
    );
  }
}

export default TextBox;

