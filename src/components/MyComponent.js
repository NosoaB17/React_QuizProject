import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "BaoBao", age: "23" },
      { id: 2, name: "Messi", age: "17" },
      { id: 3, name: "7 Cho", age: "42" },
    ],
  };

  render() {
    // DRY : Dont Repeat Yourself
    return (
      <div>
        <UserInfor />
        <br></br>
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
