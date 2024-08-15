import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    //prop => properties
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true ? "Hide" : "Show"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user, index) => {
              console.log("check user", user);
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My Name: {user.name}</div>
                  <div>My Age: {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
