import React, { Component } from "react";
import EmpServices from "../services/EmpServices";
import { Link } from 'react-router-dom';

class ListEmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emps: [],
    }
   
  }
componentDidMount(){
    EmpServices.getEmps().then((res)=>{
        this.setState({emps:res.data});
    });
}

  render() {
    return (
      <div>
      
        <h3 className="text-center mt-4">Employees List</h3>
        <div >
                    <Link to='addEmp' className='btn btn-success'>Add Employee</Link>
                </div>
        <div className="row mt-1">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="text-center">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              { 
                this.state.emps.map(
                    emp => 
                <tr key={emp.id}>
                  <td>{emp.firstname}</td>
                  <td>{emp.lastname}</td>
                  <td>{emp.emailid}</td>
                  <td>
                  <button type="button" class="btn btn-warning m-1 w-25">Edit</button>
                  <button type="button" class="btn btn-danger w-25">Delete</button>
                  </td>
                </tr>
              
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmp;
