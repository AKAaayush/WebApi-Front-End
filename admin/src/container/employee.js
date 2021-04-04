//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery'; 
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
    render(){

        return(
            <div className="MainDiv">
    <Navbar/>
            
            <div className="container">
                
            <table id="example" class="table table-striped table-bordered table-sm row-border hover mb-5" >
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Name</th>
                    <th>Employee Name</th>
                    <th>Employee Name</th>
                    <th>Employee Name</th>
                    <th>Employee Name</th>
                    
                </tr>
            </thead>
                <tbody>
                {this.state.data.map((result) => {
                  return (
                    <tr >
                        <td>{result.employee_name}</td>
                        <td>{result.employee_address}</td>
                        <td>{result.employee_phone}</td>
                        <td>{result.employee_gender}</td>
                        <td>{result.employee_dob}</td>
                        <td>{result.employee_image}</td>

                      
                      </tr>
                )
                })}
                  
                
                </tbody>
              </table>
               
              </div>
            </div>
        )
    }
}

export default Employee