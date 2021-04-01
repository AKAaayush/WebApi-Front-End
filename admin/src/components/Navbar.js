import React, { useState,state } from 'react';
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import './Navbar.css';
import { Component } from 'react';

class Navbar extends Component {
  logout = (e) => {
    localStorage.removeItem('token')
    window.location.href = "/"
  }

  
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
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);


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
                <Link to = '/reports'>
                        <i class="fa fa-laptop fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Report
                        </span>
                        </Link>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-list fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Forms
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-folder-open fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Pages
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-bar-chart-o fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Graphs and Statistics
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                           Quotes
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-table fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Tables
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Maps
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Documentation
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <Link to= '/'onClick={this.logout}>
                         <i class="fa fa-power-off fa-2x"style={mystyle}></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </Link>
                </li>  
            </ul>
        </nav>



  }
  return (
    <>
      {adminlogin}
    </>
  );
}
}

export default Navbar;
