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
    const filtered = this.state.employees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
    // Set the state of filterEmployees
    this.setState({ filteredEmployees: filtered });
  };
  
  // create function to sort by first name
  // handleFirstName = () => {
  //   function findEmployeeA(a, b) {
  //     const A = a.name.first.toLowerCase();
  //     const B = b.name.first.toLowerCase();
  //     let comparison = 0;
  //     if(A > B) {
  //       comparison = 1;
  //     } else {
  //       comparison = -1;
  //     }
  //     return comparison;
  //   }

  //   function findEmployeeZ(a, b) {
  //     const A = a.name.first.toLowerCase();
  //     const B = b.name.first.toLowerCase();
  //     let comparison = 0;
  //     if(B > A) {
  //       comparison = 1;
  //     } else {
  //       comparison = -1;
  //     }
  //     return comparison;
  //   }

  //   if (this.state.isSorted) {
  //     this.state.employees.sort(findEmployeeA);
  //     this.setState({
  //       isSorted: false
  //     })
  //   } else {
  //     this.state.employees.sort(findEmployeeZ);
  //     this.setState({
  //       isSorted: true
  //     })
  //   }
  //   this.setState({ employees: this.state.employees});
  // }

  render() {
    const employeeInfo = this.state.filteredEmployees.map((employee, i) => {
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
        <Header handleInput={this.handleInput} value={this.state.search} />

        <div className={"container-fluid"}>
          <div className={"table-responsive"}>
            <table className={"table"}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>
                    First Name
                  </th>
                  <th>
                    Last Name
                  </th>
                  <th>Email</th>
                  <th>Age</th>
                </tr>
              </thead>
            {employeeInfo}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
