// import { Button } from "bootstrap";
import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Navbar from '../../components/Navbar';

import axios from 'axios'
class MenuAdd extends Component{
    constructor(){
        super();
        this.state ={
            'menu_name' : '',
            'menu_title' : '',
            'menu_price' : '',
            'menu_desc' : '',
            'menu_image' : '',
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
            menu_image : e.target.files[0]
        })
    }
    addMenu = (e) =>{
        e.preventDefault();
    
        const data = new FormData()
        
        data.append('menu_name' , this.state.menu_name)
        data.append('menu_price',this.state.menu_price)
        data.append('menu_title', this.state.menu_title)
        data.append('menu_desc', this.state.menu_desc)
        data.append('menu_image', this.state.menu_image)
    
      
        axios.post('http://localhost:100/addmenu',data, this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })

        window.location.href ="/Menu"
    }
    
    render(){
        return(
            

            <div>
            <Navbar/>


            <div class="container" >

                <div class="row">
                    <div class="col-lg-3 col-md-2"></div>
                    <div class="col-lg-6 col-md-8 login-box">
                        <div class="col-lg-12 login-key">
                            <i class="fa fa-hamburger" aria-hidden="true"></i>
                        </div>
                        <div class="col-lg-12 login-title">
                            Add Menu 
            </div>

                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                                <form>
                                    <div class="form-group">
                                        <label class="form-control-label">Menu Name</label>
                                        <input type="text" class="form-control" name ='menu_name' onChange={this.inputHandler}  />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Menu Title</label>
                                        <input type="text" class="form-control" name ='menu_title'onChange={this.inputHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Menu Price</label>
                                        <input type="text" class="form-control" name ='menu_price' onChange={this.inputHandler}  />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Menu Desc</label>
                                        <input type="text" class="form-control" name ='menu_desc' onChange={this.inputHandler}  />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Food Image</label>
                                        <input type="file" class="form-control" name="menu_image"  onChange={this.fileHandler}  />
                                    </div>


                                    <div class="col-lg-12 loginbttm">
                                        <div class="col-lg-8 login-btm login-button">
                                            {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                            <a href= "/menu"  class="btn btn-outline-primary" style={{alignContent :'center'}} onClick = {this.addMenu}>Add</a>
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
 export default MenuAdd