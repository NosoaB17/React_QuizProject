import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  render() {
    const myInfor = ["ab", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br></br>
        <DisplayInfor name="BaoBao" age="26" />
        <hr />
        <DisplayInfor name={"BoBa"} age={23} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
