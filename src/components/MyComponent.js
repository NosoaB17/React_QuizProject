import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "BaoBao", age: "23" },
      { id: 2, name: "BoBo", age: "29" },
      { id: 3, name: "BaBa", age: "21" },
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
