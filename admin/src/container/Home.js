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
        {/* <div> <p> { this.state.longeur}</p> </div> */}
        <div class="row">
              <div class="col-md-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3 col-md-6">
                        <div class="d-flex">
                          <div class="wrapper">
                            <h3 class="mb-0 font-weight-semibold">32,451</h3>
                            <h5 class="mb-0 font-weight-medium text-primary">Visits</h5>
                            <p class="mb-0 text-muted">+14.00(+0.50%)</p>
                          </div>
                          <div class="wrapper my-auto ml-auto ml-lg-4"><div class="chartjs-size-monitor" style={{position: "absolute", inset: "0px", overflow: "hidden", PointerEvent: "none", visibility: "hidden",zIndex: "-1"}}><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                            <canvas height="62" width="125" id="stats-line-graph-1" class="chartjs-render-monitor" style="display: block; height: 50px; width: 100px;"></canvas>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 mt-md-0 mt-4">
                        <div class="d-flex">
                          <div class="wrapper">
                            <h3 class="mb-0 font-weight-semibold">15,236</h3>
                            <h5 class="mb-0 font-weight-medium text-primary">Impressions</h5>
                            <p class="mb-0 text-muted">+138.97(+0.54%)</p>
                          </div>
                          <div class="wrapper my-auto ml-auto ml-lg-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                            <canvas height="62" width="125" id="stats-line-graph-2" class="chartjs-render-monitor" style="display: block; height: 50px; width: 100px;"></canvas>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 mt-md-0 mt-4">
                        <div class="d-flex">
                          <div class="wrapper">
                            <h3 class="mb-0 font-weight-semibold">7,688</h3>
                            <h5 class="mb-0 font-weight-medium text-primary">Conversation</h5>
                            <p class="mb-0 text-muted">+57.62(+0.76%)</p>
                          </div>
                          <div class="wrapper my-auto ml-auto ml-lg-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                            <canvas height="62" width="125" id="stats-line-graph-3" class="chartjs-render-monitor" style="display: block; height: 50px; width: 100px;"></canvas>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 mt-md-0 mt-4">
                        <div class="d-flex">
                          <div class="wrapper">
                            <h3 class="mb-0 font-weight-semibold">1,553</h3>
                            <h5 class="mb-0 font-weight-medium text-primary">Downloads</h5>
                            <p class="mb-0 text-muted">+138.97(+0.54%)</p>
                          </div>
                          <div class="wrapper my-auto ml-auto ml-lg-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                            <canvas height="62" width="125" id="stats-line-graph-4" class="chartjs-render-monitor" style="display: block; height: 50px; width: 100px;"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
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
