import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Navbar from '../../components/Navbar';
import axios from 'axios'
class Employee extends Component{
    constructor(){
        super();
        this.state ={
            'employee_name' : '',
            'employee_email':'',
            'employee_address': '',
            'employee_phone':'',
            'employee_image':'',
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
           employee_image : e.target.files[0]
        })
    }
    addStaff = (e) =>{
        e.preventDefault();
        const data = new FormData()
        
        data.append('employee_name' , this.state.employee_name)
        data.append('employee_email' , this.state.employee_email)
        data.append('employee_address',this.state.employee_address)
        data.append('employee_phone', this.state.employee_phone)
        data.append('employee_image', this.state.employee_image)

        // console.log(this.state.food_image)
      
        axios.post('http://localhost:100/addemployee',data, this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
        window.location.href ="/employeedetails"
          
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
                            <i class="fa fa-user-tie" aria-hidden="true"></i>
                        </div>
                        <div class="col-lg-12 login-title">
                            Add Staff 
            </div>

                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                                <form>
                                    <div class="form-group">
                                        <label class="form-control-label"> Name</label>
                                        <input type="text" class="form-control" name ='employee_name'placeholder="Name"  onChange={this.inputHandler}  />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Email</label>
                                        <input type="text" class="form-control" name ='employee_email'placeholder="Email"  onChange={this.inputHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Address</label>
                                        <input type="text" class="form-control" name ='employee_address'placeholder="Address"  onChange={this.inputHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Phone</label>
                                        <input type="text" class="form-control" name="employee_phone" placeholder="Phone no"   onChange={this.inputHandler}  />
                                    </div>
                                
                                    <div class="form-group">
                                        <label class="form-control-label"> Image</label>
                                        <input type="file" class="form-control" name="employee_image"  onChange={this.fileHandler}  />
                                    </div>


                                    <div class="col-lg-12 loginbttm">
                                        <div class="col-lg-8 login-btm login-button">
                                            {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                            <Button  class="btn btn-outline-primary" style={{alignContent :'center'}} onClick = {this.addStaff}>Add</Button>
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
export default Employee