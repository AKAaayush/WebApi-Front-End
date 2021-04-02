// import React from 'react';
import { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
// import pagiantionFactory from 'react-bootstrap-table2-paginator'
import Navbar from '../components/Navbar';
import axios from 'axios'
import paginationFactory from 'react-bootstrap-table2-paginator';
import {  Image } from "react-bootstrap";
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

class Reports extends Component {

  state = {
    fooditem: [],
    config : {
      header : {'authorization': `Bearer ${localStorage.getItem('token')}`}
  }

}
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
        $('#example').DataTable();
    });

    //fetch data
    axios.get('http://localhost:100/fooditem/display')
            .then((response) => {
                console.log(response)
                this.setState({

                    fooditem: response.data.data
                })
            })

            .catch()
 }
  render(){
    //Datatable HTML
  return (
   
    <div className="MainDiv" style={{textAlign:"center"}}>
       <Navbar/>
    
          <h3>Food Item</h3>
    
      
      <div className="container">
          
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Food Name</th>
                    <th>Food Description</th>
                    <th>Food Price</th>
                    <th>Food Image</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
            {this.state.fooditem.map((fooditem) => {
              return(
                <tr>
                    <td>{fooditem.food_name}</td>
                    <td>{fooditem.food_desc}</td>
                    <td>{fooditem.food_price}</td>
                    <td><Image src={'http://localhost:100/images/' + fooditem.food_image}  width='40'/></td>
                    <td><button>Update</button>| <button>Delete</button></td>

                   
                    
                </tr>
              )
            })}
                
            </tbody>
            
        </table>
          
        </div>
      </div>
  );
}
}

export default Reports;
