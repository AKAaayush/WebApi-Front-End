// import React from 'react';
import { Component } from 'react';
import {  useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

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

class Home extends Component{
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
  render(){
    return(
      <>
        <Navbar />
        <div className="container">
        <div> <p> { this.state.longeur}</p> </div>
        </div>
      </>

    )
  }
} 

export default Home;
