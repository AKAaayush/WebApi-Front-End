// import React from 'react';
import { Component } from 'react';
import Navbar from '../components/Navbar';

class  Home extends Component {
 
  render(){
    if (localStorage.getItem('token')) {
    var adminlogin = 
    <div className='home'>
      
      <h1>Home</h1>
    </div>
    }
  return (
    <>
    <Navbar />
    {adminlogin}
    </>
  );
}
}

export default Home;
