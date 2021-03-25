import { Component } from "react";
import Register from './container/Register'
import Login from './container/Login'
import MenuAdd from './container/MenuAdd'
import MyMenu from './container/MyMenu'
import UpdateMenu from './container/UpdateMenu'
import Header from './components/Header'
import Footer from './components/Footer'
import {Route} from 'react-router-dom'

 class Routes extends Component {
     render(){
         return(
        
            <div className="animsition" style={{ opacity: '1' }}>
                <Header/>
                
            <Route path = '/menuadd' component={MenuAdd}></Route>
            <Route path = '/register' component={Register}></Route>
            <Route path = '/mymenu' component={MyMenu}></Route>
            <Route path = '/updatemenu/:id' component={UpdateMenu}></Route>
            <Route path = '/login' component = {Login}></Route>
            <Footer/>
            </div>
          
         
 
         )
     }
 }
 export default Routes