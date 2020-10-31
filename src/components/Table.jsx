import React from "react";

const Table = (props) => {
  return (
    <tbody>
          {/* <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr> */}
          <tr>
            <td>
              <img src={props.image} alt="" />
            </td>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.email}</td>
            <td>{props.age}</td>
          </tr>
   </tbody>
  );
};

export default Table;
