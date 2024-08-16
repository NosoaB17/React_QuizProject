import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "SonNB",
//     address: "Wuan Nhan",
//     age: 23,
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//     console.log(event, event.target.value);
//   };

//   handleOnChangeAge = (event) => {
//     //bad code
//     // this.state.age = event.target.value
//     this.setState({
//       age: event.target.value,
//     });
//     console.log(event, event.target.value);
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor((Math.random()*100) +1) + '-random',
//       name: this.state.name,
//       age: this.state.age
//   });
//   };

//   render() {
//     return (
//       <div>
//         {" "}
//         My name is {this.state.name} and i live in {this.state.address}. I'm{" "}
//         {this.state.age} years old.
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <label>Age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      {" "}
      My name is {name} and i live in {address}. I'm {age} years old.
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>Age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
