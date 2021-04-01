import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from "react-bootstrap-table2-paginator"
import * as ReactBootStrap from "react-bootstrap"

function Products() {
  const [menu,setmenu] = useState([])
  const [loading, setLoading] = useState(false);

  const getMenuData = async () => {
    try {
      const data = await axios.get(
        "http://localhost:100/menu/display"
      );
      console.log(data);
      setmenu(data.data.data);
    }
    catch(e){
      console.log(e)
    }
  }

  const columns = [
    {
      dataField: "menu_name", text : "Menu Name"
    },
    {
      dataField: "menu_title", text : "Menu Title"
    },
    {
      dataField: "menu_desc", text : "Menu Description"
    },
    {
      dataField: "menu_price", text : "Menu Price"
    },
    {
      dataField: "menu_image", botton : "Menu Price"
    }
  ]

  useEffect(() =>{
    getMenuData();
  }, []);
  return (
    
    <>
    <Navbar/>
    <div className='products'>
      <h1>Menus</h1>

      <BootstrapTable
      keyField ="menu_name"
      data = {menu}
      columns = {columns}
      pagination = { paginationFactory()}

      />
      
      
    </div>
    </>
  );
}

export default Products;
