import React, { Component } from 'react';
//import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
//import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends Component{
    state = {
        name : '',
        user : {},
        clicked : false,
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('userToken')}` }
          }
       
    }
    handleClick = () =>{
            this.setState({clicked : !this.state.clicked})
    }
    componentDidMount() {
        axios.get('http://localhost:100/checkuserlogin', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data,
                    name:response.data.name,
                    
                   
                })
               

            })
    }
    logout = (e) => {
axios.delete('http://localhost:100/logout/user', this.state.config)
    
    localStorage.removeItem('userToken');
    localStorage.removeItem('cart');

    this.props.history.push('/home')

  }
            
    render(){
        if (localStorage.getItem('userToken')) {
            var login=<>
            
            <h1 className ="navbar-logo"><Link to ="/home" style={{color:'white'}}>RMS</Link></h1>
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
                            <Link to = "/mycart" className="nav-links" >Cart</Link>
                        </li>
                        <li >
                            <Link to = "/Contact" className="nav-links" >Contact</Link>
                        </li>
                        <li >
                            <Link to = "/Aboutus" className="nav-links" >About-US</Link>
                        </li>
                        <li >
                            <Link to = "/userprofile" className="nav-links" >{this.state.user.name}</Link>
                        </li>
                        <li >
                            <a href = "/" className="nav-links" onClick={this.logout} >Logout</a>
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