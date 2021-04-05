import { Component } from "react"
import {  Image, Button } from "react-bootstrap";
import Navbar from '../components/Navbar';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';

class UserDetails extends Component{
    constructor(){
    super();
    this. state = {
        userlist: [],
       
    
    }
}
componentDidMount() {
    //Get all users details and table columns names in bootstrap table
    axios.get('http://localhost:100/user/display')
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
    render(){
        
          
          return(
            <div className="MainDiv" style={{textAlign:"center"}}>
            <Navbar/>
         
               <h3>User Details</h3>
         
           
           <div className="container">
               
               <table id="example" class="display">
                 <thead>
                     <tr>
                         <th> Name</th>
                         <th> Email</th>
                         <th>Address</th>
                         <th>DOB</th>
                         <th>Gender</th>
                         <th>Action</th>
                         
                     </tr>
                 </thead>
                 <tbody>
                 {this.state.userlist.map((userlist) => {
                   return(
                     <tr>
                         <td>{userlist.name}</td>
                         <td>{userlist.email}</td>
                         <td>{userlist.address}</td>
                         <td>{userlist.dob}</td>
                         <td>{userlist.gender}</td>
                         {/* <td><Image src={'http://localhost:100/images/' + menulist.menu_image}  width='40'/></td> */}
                         <td><Button>Update</Button>| <Button>Delete</Button></td>
     
                        
                         
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

export default UserDetails