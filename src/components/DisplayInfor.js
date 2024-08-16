import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  // Chuan : dung Constructor khai bao state
  constructor(props) {
    console.log("Call Constructor: 0");
    super(props);
    //babel compiler
    this.state = {
      isShowListUser: true,
    };
  }
  // state = {
  //   isShowListUser: true,
  // };

  componentDidMount() {
    console.log("Call me DidMount");
    setTimeout(() => {
      document.title = "My React Study";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Call me DidUpdate", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("5 Users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    console.log("call me render");
    const { listUsers } = this.props;
    console.log(listUsers);
    //prop => properties
    return (
      <div className="display-info-container">
        {/* <img src={logo} /> */}
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
                  <div>
                    <div>My Name: {user.name}</div>
                    <div>My Age: {user.age}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>
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
