import { Component } from "react";
import Register from './Client/container/Register'
import Login from './Client/container/Login'
import MyMenu from './Client/container/MyMenu'
import Home from './Client/container/Home'
import UserProfile from './Client/container/UserProfile'
import FoodDetails from './Client/container/MenuDetails'
import {Route,BrowserRouter, Redirect} from 'react-router-dom'
 import Navbar from './Client/components/Navbar/Navbar'
 import ViewFood from './Client/container/ViewFood'
 import CartView from './Client/container/CartView'
 import Contact from './Client/container/ContactUs'
 import About from './Client/container/AboutUs'




// import { Nav } from "react-bootstrap";


 class Routes extends Component {
     render(){
         return(
        
        <BrowserRouter>
        <Navbar/>
        {/* <Header/> */}
        {/* <Login/> */}
        {/* <Signup/> */}
        <Route
                exact
                path="/"
                render={() => {
                    return (
                     
                      <Redirect to="/home" /> 
                     
                    )
                }}
              />
            <Route path = '/home' component={Home}></Route>
            <Route path = '/register' component={Register}></Route>
            <Route path = '/mymenu' component={MyMenu}></Route>
            {/* <Route path = '/login' component = {Login}></Route> */}
            <Route path = '/userprofile' component = {UserProfile}></Route>
            <Route path = '/menu/:menu_name' component = {FoodDetails}></Route>
            <Route path = '/Login' component = {Login}></Route>
            <Route path = '/food/:food_name' component = {ViewFood}></Route>
            <Route path = '/mycart' component = {CartView}></Route>
            <Route path = '/contact' component = {Contact}></Route>
            <Route path = '/aboutus' component = {About}></Route>









            
            
            </BrowserRouter>
        
         )
     }
 }
 export default Routes