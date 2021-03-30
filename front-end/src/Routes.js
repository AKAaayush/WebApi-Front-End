import { Component } from "react";
import Register from './container/Register'
import Login from './container/Login'
//import Signup from './container/Register'
import MenuAdd from './container/MenuAdd'
import MyMenu from './container/MyMenu'
import Home from './container/Home'
import UserProfile from './container/UserProfile'
//import Login from './container/Login'
import UpdateMenu from './container/UpdateMenu'
import FoodDetails from './container/FoodDetails'
//import Footer from './components/Footer'
import {Route,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

 class Routes extends Component {
     render(){
         return(
        
        <BrowserRouter>
        <Navbar/>
        {/* <Header/> */}
        <Login/>
        {/* <Signup/> */}
            <Route path = '/home' component={Home}></Route>
            <Route path = '/menuadd' component={MenuAdd}></Route>
            <Route path = '/register' component={Register}></Route>
            <Route path = '/mymenu' component={MyMenu}></Route>
            <Route path = '/updatemenu/:id' component={UpdateMenu}></Route>
            <Route path = '/login' component = {Login}></Route>
            <Route path = '/userprofile' component = {UserProfile}></Route>
            <Route path = '/food/:menu_name' component = {FoodDetails}></Route>


            
            
            </BrowserRouter>
        
         )
     }
 }
 export default Routes