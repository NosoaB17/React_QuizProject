// class Component
// function Component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "SonNB",
    address: "Wuan Nhan",
    age: 23,
  };
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and i live in {this.state.address}. I'm{" "}
        {this.state.age} years old.
      </div>
    );
  }
}

export default MyComponent;
