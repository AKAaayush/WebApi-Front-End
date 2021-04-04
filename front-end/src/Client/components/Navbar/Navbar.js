import React, { Component } from 'react';
//import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends Component{
    state = {
        clicked : false
       
    }
    handleClick = () =>{
            this.setState({clicked : !this.state.clicked})
    }
    logout = (e) => {
        localStorage.removeItem('token')
        window.location.href ="/"
            }
    render(){
        if (localStorage.getItem('userToken')) {
            var login=<>
            
            <h1 className ="navbar-logo">RMS<i className ="fab fa-react"></i></h1>
            <div className ="menu-icon" onClick ={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {/* {MenuItems.map((item, index)=>{ */}
                    {/* return( */}
                        <li >
                            <Link to = "/home" className="nav-links" >Home</Link>
                        </li>
                        <li >
                            <Link to = "/mymenu" className="nav-links" >Menu</Link>
                        </li>
                        <li >
                            <Link to = "/Contact" className="nav-links" >Contact</Link>
                        </li>
                        <li >
                            <Link to = "/Aboutus" className="nav-links" >About-US</Link>
                        </li>
                        <li >
                            <Link to = "/userprofile" className="nav-links" >Userprofile</Link>
                        </li>
                        <li >
                            <Link to = "/" className="nav-links" onClick={this.logout} >Logout</Link>
                        </li>
                        

                    {/* ) */}
                {/* })} */}
            </ul>
            
        
            </>

        }

        else{
            var logout = 
            <>
            <h1 className ="navbar-logo">RMS</h1>
            <div className ="menu-icon" onClick ={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {/* {MenuItems.map((item, index)=>{ */}
                    {/* return( */}
                        <li >
                            <Link to = "/home" className="nav-links" >Home</Link>
                        </li>
                        <li >
                            <Link to = "/mymenu" className="nav-links" >Menu</Link>
                        </li>
                        <li >
                            <Link to = "/Contact" className="nav-links" >Contact</Link>
                        </li>
                        <li >
                            <Link to = "/Aboutus" className="nav-links" >About-US</Link>
                        </li>
                        <li >
                        <Link to = "/login"className="nav-links"> Login</Link>
                            {/* <Link to = "/login" className="nav-links" >Login</Link> */}
                        </li>



                    {/* ) */}
                {/* })} */}
            </ul>
            
        
        </>
        }
        return(
            
            <nav className="NavbarItems">

            {login}
            {logout}
         
            </nav>
           
            
            
        )
    }
}
export default Navbar