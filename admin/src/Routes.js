import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import FoodItems from './container/FootItems';
import Products from './container/Menu';
import { Component } from 'react';
import Login from './container/Login'
import Employee from './container/employee'
import UpdateFood from './container/Food/Update'
import AddFood from './container/Food/Add'
import UpdateMenu from './container/Menu/Update'



import UserDetails from './container/UserDetails'

// import Navbar from './components/Navbar';
class Routes extends Component {
  render(){
      return (
    <>
   
      <Router>
      {/* <Navbar/> */}
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/fooditems' component={FoodItems} />
          <Route path='/Menu' component={Products} />
          <Route path='/userdetails' component={UserDetails} />
          <Route path='/employeedetails' component={Employee} />


          {/*  Fooditem */}
          <Route path='/updatefood/:id' component={UpdateFood} />
          <Route path='/addfooditem' component={AddFood} />

          {/* Menu */}
          <Route path='/updatemenu/:id' component={UpdateMenu} />





        </Switch>
      </Router>
    </>
  );
}
}

export default Routes;
