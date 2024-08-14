// class Component
// function Component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "SonNB",
    address: "Wuan Nhan",
    age: 23,
  };

  handleClick(event) {
    console.log("Click my button");
    this.setState({
      name: "NgoBaoSon",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event, event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and i live in {this.state.address}. I'm{" "}
        {this.state.age} years old.
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
