import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
// import './Navbar.css';
import axios from "axios";
import { Component } from 'react';

class Navbar extends Component {
    state = {
        
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          }
       
    }
    logout = (e) => {
        axios.delete('http://localhost:100/logout/admin', this.state.config)
        alert("Deleted successfully!!")
        localStorage.removeItem('token')
        window.location.href ="/"}
     
  
  render(){
    const mystyle = {
    position: "relative",
    display: "table-cell",
    width: "60px",
    height: "36px",
    textAlign: "Center",
    fontSize : "20px",
    vericalAlign: "middle"
   
    };

  if (localStorage.getItem('token')) {
    var adminlogin = 
    
<nav class="main-menu">
            <ul>
                <li>
                    <Link to = '/home'>
                        <i class="fa fa-home fa-2x" style={mystyle}></i>
                        <span class="nav-text">
                            Home
                        </span>
                        </Link>
                  
                </li>
                <li class="has-subnav">
                < Link to = '/Menu'>
                        <i class="fa fa-book fa-2x"style={mystyle} ></i>
                        <span class="nav-text">
                            Menu
                        </span>
                        </ Link>
                    
                </li>
                <li class="has-subnav">
                    <Link to="/fooditems">
                       <i class="fa fa-hamburger fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Food Items
                        </span>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link to="/userdetails">
                       <i class="fa fa-users fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            User
                        </span>
                    </Link>
                   
                </li>
                <li>
                    <Link to="/tablebooking">
                        <i class="fa fa-table fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Table Booking
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/employeedetails">
                    <i class="fa fa-id-card fa-2x"style={mystyle}></i>
                       
                        <span class="nav-text">
                           Staff
                        </span>
                    </Link>
                </li>
             
                <li>
                   <Link to = '/profile'>
                        {/* <i class="fa fa-map-marker fa-2x"style={mystyle}></i> */}
                        <i class="fa fa-user fa-2x "style={mystyle}></i>
                        <span class="nav-text">
                            Profile
                        </span>
                    </Link>
                </li>

                <li>
                   <Link to = '/admindetails'>
                   <i class="fa fa-user-tie fa-2x"style={mystyle}></i>
                        {/* <i class="fa fa-map-marker fa-2x"style={mystyle}></i> */}
                        {/* <i class="fa fa-user fa-2x "style={mystyle}></i> */}
                        <span class="nav-text">
                            Admin Details
                        </span>
                    </Link>
                </li>
        
            </ul>

            <ul class="logout">
                <li>
                   <a href= '/'onClick={this.logout}>
                         <i class="fa fa-power-off fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>



  }

  else{
      var auth =
      <Redirect to = "/"></Redirect>
  }
  return (
    <>
      {adminlogin}
      {auth}
    </>
  );
}
}

export default Navbar;
