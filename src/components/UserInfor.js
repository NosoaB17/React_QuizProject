import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "SonNB",
    address: "Wuan Nhan",
    age: 23,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event, event.target.value);
  };

  handleOnChangeAge = (event) => {
    //bad code
    // this.state.age = event.target.value
    this.setState({
      age: event.target.value,
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
        {" "}
        My name is {this.state.name} and i live in {this.state.address}. I'm{" "}
        {this.state.age} years old.
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>Age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
