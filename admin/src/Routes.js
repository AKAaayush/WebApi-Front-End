import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import Reports from './container/Reports';
import Products from './container/Menu';
import { Component } from 'react';
import Login from './container/Login'
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
          <Route path='/reports' component={Reports} />
          <Route path='/Menu' component={Products} />
        </Switch>
      </Router>
    </>
  );
}
}

export default Routes;
