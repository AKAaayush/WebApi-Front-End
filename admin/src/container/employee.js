//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import { Link } from 'react-router-dom';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery'; 
import {  Image } from "react-bootstrap";
import Navbar from '../components/Navbar';
//For API Requests
import axios from 'axios';
import { Component } from 'react';


class Employee extends Component{
    //Declare data store variables
  constructor(props) {
    super(props)
      this.state = {
        data: [],
        config: {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
       
              }
      }

      componentDidMount() {
        //Get all users details and table columns names in bootstrap table
        axios.get('http://localhost:100/employee/display')
        .then((response) => {
            console.log(response)
            this.setState({

              data: response.data.data
            })
        })

        .catch()
          
        //init Datatable  
        setTimeout(()=>{                        
        $('#example').DataTable(
          {
            "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
          }
        );
      }, 100);
     }
     deleteStaff = (id) => {
      axios.delete('http://localhost:100/employee/delete/' + id, this.state.config)
          .then((response) => {
              console.log(response)
          })
          .catch((err) => {
              console.log(err.response)
          })
    
    }
    render(){

        return(
            <div className="MainDiv"  style={{textAlign:"center"}}>
    <Navbar/>
    <h3>Food Item</h3>
            <div className="container">
               
            <table id="example" class="table table-striped table-bordered table-sm row-border hover mb-5" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Image</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
                <tbody>
                {this.state.data.map((result) => {
                  return (
                    <tr >
                        <td>{result.employee_name}</td>
                        <td>{result.employee_email}</td>
                        <td>{result.employee_address}</td>
                        <td>{result.employee_phone}</td>
                        <td><Image src={'http://localhost:100/images/' + result.employee_image}  width='40'/></td>
                        <td><Link to ={'updatestaff/'+ result._id}>Update</Link>| <a href ='/employeedetails' onClick={this.deleteStaff.bind(this, result._id)} >Delete</a></td>

                      
                      </tr>
                )
                })}
                  
                
                </tbody>
              </table>
               
              </div>
              <Link to="/addstaff">Add</Link>
            </div>
        )
    }
}

export default Employee