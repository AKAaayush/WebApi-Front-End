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

class Products extends Component {
  constructor(){
    super();
    this. state = {
      menulist: [],
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }

  }
}
 

componentDidMount() {
  //Get all users details and table columns names in bootstrap table
  axios.get('http://localhost:100/menu/display')
  .then((response) => {
      console.log(response)
      this.setState({

        menulist: response.data.data
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

deleteMenu = (id) => {
  axios.delete('http://localhost:100/menu/delete/' + id, this.state.config)
      .then((response) => {
          console.log(response)
      })
      .catch((err) => {
          console.log(err.response)
      })

}
  render(){
  return (
    
    <div className="MainDiv" style={{textAlign:"center"}}>
       <Navbar/>
    
          <h3>Food Menu</h3>
    
      
      <div className="container">
          
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Menu Name</th>
                    <th>Menu Title</th>
                    <th>Menu Description</th>
                    <th>Menu Price</th>
                    <th>Menu Image</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
            {this.state.menulist.map((menulist) => {
              return(
                <tr>
                    <td>{menulist.menu_name}</td>
                    <td>{menulist.menu_title}</td>
                    <td>{menulist.menu_desc}</td>
                    <td>{menulist.menu_price}</td>
                    <td><Image src={'http://localhost:100/images/' + menulist.menu_image}  width='40'/></td>
                    <td><Link to ={'updatemenu/'+ menulist._id}>Update</Link>| <a href ='/menu'  onClick={this.deleteMenu.bind(this, menulist._id)}>Delete</a></td>

                   
                    
                </tr>
              )
            })}
                
            </tbody>
            
        </table>
        <Link to="/addmenu">Add</Link>
        </div>
      </div>
  );
}
}

export default Products;
