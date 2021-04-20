import { Component } from "react"
import {  Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';

class AdminDetails extends Component{
    constructor(){
    super();
    this.state = {
        userlist: [],
        config: {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    
    }
}
componentDidMount() {
    //Get all users details and table columns names in bootstrap table
    axios.get('http://localhost:100/Admin/display', this.state.config)
    .then((response) => {
        console.log(response)
        this.setState({
  
            userlist: response.data
        })
    })
  
    .catch()
      
    //init Datatable  
    setTimeout(()=>{                        
    $('#example').DataTable(
      {
        "lengthMenu": [[ 10, 15, -1], [ 10, 15, "All"]]
      }
    );
  }, 100);
  }

  deleteAdmin = (id)=>{
    axios.delete('http://localhost:100/admin/delete/' + id, this.state.config)
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
         
               <h3>Admin Details</h3>
         
           
           <div className="container">
               
               <table id="example" class="display">
                 <thead>
                     <tr>
                       <th>SN</th>
                         <th> Name</th>
                         <th> Email</th>
                         <th>Address</th>
                         <th>Phone</th>
                         <th>Image</th>
                         <th>Action</th>
                         
                     </tr>
                 </thead>
                 <tbody>
                 {this.state.userlist.map((userlist, index) => {
                   return(
                     <tr>
                        <th scope ="row">{index + 1 }</th>
                         <td>{userlist.name}</td>
                         <td>{userlist.email}</td>
                         <td>{userlist.address}</td>
                         <td>{userlist.phone}</td>
                         <td><Image src={'http://localhost:100/images/' + userlist.image}  width='40'/></td>
                         <td><a href ='/admindetails'  onClick={this.deleteAdmin.bind(this, userlist._id)}>Delete</a></td>
     
                        
                         
                     </tr>
                   )
                 })}
                     
                 </tbody>
                 
             </table>
               
             </div>

             <Link to="/addadmin">Add</Link>
           </div>
        )
    }
}

export default AdminDetails