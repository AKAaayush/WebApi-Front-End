import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Navbar from '../../components/Navbar';

import axios from 'axios'
class ProductAdd extends Component{
    constructor(){
        super();
        this.state ={
            'food_name' : '',
            'food_price' : '',
            'food_desc' : '',
            'food_image' : '',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
              }
        }
    }
    inputHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    fileHandler = (e)=> {
        this.setState({
           food_image : e.target.files[0]
        })
    }
    addFood = (e) =>{
        e.preventDefault();
        const data = new FormData()
        
        data.append('food_name' , this.state.food_name)
        data.append('food_price',this.state.food_price)
        data.append('food_desc', this.state.food_desc)
        data.append('food_image', this.state.food_image)
        console.log(this.state.food_image)
      
        axios.post('http://localhost:100/foodadd',data, this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })

          
    }
    
    render(){
        return(
           

            

            <div>
            <Navbar/>


            {/* <Paper elevation={10} style={paperStyle}></Paper> */}
            <div class="container" >

                <div class="row">
                    <div class="col-lg-3 col-md-2"></div>
                    <div class="col-lg-6 col-md-8 login-box">
                        <div class="col-lg-12 login-key">
                            <i class="fa fa-hamburger" aria-hidden="true"></i>
                        </div>
                        <div class="col-lg-12 login-title">
                            Add Food 
            </div>

                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                                <form>
                                    <div class="form-group">
                                        <label class="form-control-label">Food Name</label>
                                        <input type="text" class="form-control" name ='food_name'placeholder="Food Name"  onChange={this.inputHandler}  />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Food Price</label>
                                        <input type="text" class="form-control" name ='food_price'placeholder="Food Price"  onChange={this.inputHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Food desc</label>
                                        <input type="text" class="form-control" name="food_desc" placeholder="Food Desc"   onChange={this.inputHandler}  />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Food Image</label>
                                        <input type="file" class="form-control" name="food_image"  onChange={this.fileHandler}  />
                                    </div>


                                    <div class="col-lg-12 loginbttm">
                                        <div class="col-lg-8 login-btm login-button">
                                            {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                            <Button  class="btn btn-outline-primary" style={{alignContent :'center'}} onClick = {this.addFood}>Add</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>
            {/* <Paper/> */}
        </div>
        )
    }
}
 export default ProductAdd