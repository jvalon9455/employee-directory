import React from "react";
import API from "../utils/API";
import Table from "./Table";
import Header from "./Header/Header";

class Main extends React.Component {
  state = {
    employees: [],
    search: "",
    filteredEmployees: [],
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }
  // create handleInput to filter users request
  handleInput = (event) => {
    this.setState({ search: event.target.value });
    const filtered = this.state.filteredEmployees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    // Set the state of filterEmployees
    this.setState({ filteredEmployees: filtered });
  };
  render() {
    const employeeInfo = this.state.employees.map((employee, i) => {
      return (
        <Table
          key={i}
          first={employee.name.first}
          last={employee.name.last}
          image={employee.picture.thumbnail}
          email={employee.email}
          age={employee.dob.age}
        />
      );
    });

    return (
      <div>
        {/* <Header handleInput={this.handleInput} value={this.state.search} /> */}

        <div className={"container-fluid"}>
          <div className={"table-responsive"}>
            <table className={"table"}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>
                    First Name<i className={"fa fa-fw fa-sort"}></i>
                  </th>
                  <th>
                    Last Name<i className={"fa fa-fw fa-sort"}></i>
                  </th>
                  <th>Email</th>
                  <th>Age</th>
                </tr>
              </thead>
              {this.state.search ? this.state.search : employeeInfo}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
