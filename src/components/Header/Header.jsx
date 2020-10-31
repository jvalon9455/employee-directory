import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className={"jumbotron"}>
      <h1>Employee Directory</h1>
      <h6>
        Click on each heading to filter or use search box to narrow employee
        results
      </h6>
      <input
        type="text"
        name="search"
        placeholder="Search by First Name"
        onChange={props.handleInput}
      />
    </div>
  );
};

export default Header;
