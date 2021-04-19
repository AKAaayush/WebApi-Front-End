
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Navbar from '../components/Navbar';
import {  Image, Button } from "react-bootstrap";
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

class Table extends Component{
    constructor(){
        super();
        this. state = {
          tablelist: [],
          
      config: {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
        
      
      }
    }

    componentDidMount() {
        //Get all users details and table columns names in bootstrap table
        axios.get('http://localhost:100/table/display', this.state.config)
        .then((response) => {
            console.log(response)
            this.setState({
      
                tablelist: response.data.data
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

      deleteTable = (id) => {
        axios.delete('http://localhost:100/table/delete/' + id, this.state.config)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
      
      }
    render(){
        return(
            <div className="MainDiv" style={{textAlign:"center"}}>
            <Navbar/>
         
               <h3>Table Booking</h3>
         
           
           <div className="container">
               
               <table id="example" class="display">
                 <thead>
                     <tr>
                        <th>SN</th>
                         <th>Email</th>
                         <th>People</th>
                         <th>Time</th>
                         <th>Current-Date</th>
                         <th>Booked-Date</th>
                         <th>Action</th>
                         
                     </tr>
                 </thead>
                 <tbody>
                 {this.state.tablelist.map((tablelist, index) => {
                   return(
                     <tr>
                          <th scope ="row">{index + 1 }</th>
                         <td>{tablelist.user_email}</td>
                         <td>{tablelist.people}</td>
                         <td>{tablelist.time}</td>
                         <td>{tablelist.currentdate}</td>
                         <td>{tablelist.date}</td>


                         
                          <td><a href ='/tablebooking'  onClick={this.deleteTable.bind(this, tablelist._id)}>Delete</a></td>
     
                        
                         
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

export default Table