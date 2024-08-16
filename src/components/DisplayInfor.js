import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   // Chuan : dung Constructor khai bao state
//   // state = {
//   //   isShowListUser: true,
//   // };

//   render() {
//     console.log("call me render");
//     const { listUsers } = this.props;
//     //prop => properties
//     return (
//       <div className="display-info-container">
//         {true && (
//           <div>
//             {listUsers.map((user, index) => {
//               console.log("check user", user);
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My Name: {user.name}</div>
//                     <div>My Age: {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       {" "}
//                       Delete{" "}
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  const { listUsers } = props;
  return (
    <div className="display-info-container">
      {true && (
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
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfor;
