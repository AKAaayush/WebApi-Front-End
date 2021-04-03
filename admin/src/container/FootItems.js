// import React from 'react';
import { Component } from 'react';
import { Link, LinkButton } from 'react-router-dom';
// import pagiantionFactory from 'react-bootstrap-table2-paginator'
import Navbar from '../components/Navbar';
import axios from 'axios'
import {  Image } from "react-bootstrap";
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { Button } from 'bootstrap';

class Reports extends Component {

  state = {
    fooditem: [],
  //   config : {
  //     header : {'authorization': `Bearer ${localStorage.getItem('token')}`}
  // }

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
 deleteFood = (id) => {
  axios.delete('http://localhost:100/food/delete/' + id)
      .then((response) => {
          console.log(response)
      })
      .catch((err) => {
          console.log(err.response)
      })

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
                    <td><Link to ={'updatefood/'+ fooditem._id}>Update</Link>| <button  onClick={this.deleteFood.bind(this, fooditem._id)}>Delete</button></td>

                   
                    
                </tr>
              )
            })}
                
            </tbody>
            
        </table>
          
        </div>
        <a href="/addfooditem">Add</a>


      </div>
  );
}
}

export default Reports;
