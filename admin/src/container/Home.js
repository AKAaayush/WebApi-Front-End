// import React from 'react';
import { Component } from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import Datatable from "./datatable";
// import BootstrapTable from 'react-bootstrap-table-next'
// import paginationFactory from "react-bootstrap-table2-paginator"
// require("es6-promise").polyfill();
// require("isomorphic-fetch");



// export default function  Home() {

//   const [data,setData] = useState([])
//   const [q, setQ] = useState("")

//   useEffect(()=>{
//     fetch("http://localhost:100/user/display")
//     .then(response => response.json())
//     .then((json)=> setData(json));

//   },[])

//   //search
//   function search(rows){
//     return rows.filter(
//       (row) =>
//       row.name.toLowerCase().indexOf(q) > -1||
//       row.email.toLowerCase().indexOf(q) > -1||
//       row.address.toLowerCase().indexOf(q) > -1 




//       );
//   }
//   // render(){

//     if (localStorage.getItem('token')) {
//     var adminlogin = 
//     <div className='home'>
//        Search
//         <input type ="text" value={q} onChange={(e) => setQ(e.target.value)}/>
//       {/* <h1>Home</h1> */}

//       <div>
//         <Datatable data = {search(data)}  />

//       </div>
//     </div>
//     }
//   return (
//     <>
//     <Navbar />
//     {adminlogin}
//     </>
//   );
// }
// }

// export default Home;

class Home extends Component {
  state = {
    user: [],
    //   config : {
    //     header : {'authorization': `Bearer ${localStorage.getItem('token')}`}
    // }

  }

  componentDidMount() {
    axios.get(`http://localhost:100/user/display`)
      .then(res => {
        const persons = res.data;
        const longeur = res.data.length;
        this.setState({ persons, longeur });
      })
  }
  render() {
    return (
      <>
        <Navbar />
        {/*
        <div className="container">
        <div> <p> { this.state.longeur}</p> </div>
        </div> */}
        <div class="container" >

          <div class="row">
            
            <div class="col-lg-3 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-hamburger" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">
                User
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">

                </div>
              </div>

            </div>

            <div class="col-lg-3 col-md-8 login-box" style={{marginLeft:'100px'}}>
              <div class="col-lg-12 login-key">
                <i class="fa fa-hamburger" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">
                User
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">

                </div>
              </div>

            </div>

            <div class="col-lg-3 col-md-8 login-box" style={{marginLeft:'70px'}}>
              <div class="col-lg-12 login-key">
                <i class="fa fa-hamburger" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">
                User
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">

                </div>
              </div>

            </div>

            <div class="col-lg-3 col-md-8 login-box" style={{marginLeft:'10px'}}>
              <div class="col-lg-12 login-key">
                <i class="fa fa-hamburger" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">
                User
              </div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">

                </div>
              </div>

            </div>
          </div>


        </div>
     


      </>

    )
  }
}

export default Home;
