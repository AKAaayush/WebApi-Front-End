// import React from 'react';
import { Component } from 'react';
import Navbar from '../components/Navbar';

class  Home extends Component {
  render(){
  return (
    <>
    <Navbar />
    <div className='home'>
      <h1>Home</h1>
    </div>
    </>
  );
}
}

export default Home;
