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
    console.log("My name is ", this.state.name);
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and i live in {this.state.address}. I'm{" "}
        {this.state.age} years old.
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
