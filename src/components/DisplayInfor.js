import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    //prop => properties
    return (
      <div>
        {listUsers.map((user, index) => {
          return (
            <div key={user.id}>
              <div>My Name: {user.name}</div>
              <div>My Age: {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
