import axios from 'axios';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Navbar from '../components/Navbar';
import {  Image, Button } from "react-bootstrap";
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

class Products extends Component {
  constructor(){
    super();
    this. state = {
      menulist: []
    
  
  }
}
 

componentDidMount() {
  //Get all users details and table columns names in bootstrap table
  axios.get('http://localhost:100/menu/display')
  .then((response) => {
      console.log(response)
      this.setState({

        menulist: response.data.data
      })
  })

  .catch()
    
  //init Datatable  
  setTimeout(()=>{                        
  $('#example').DataTable(
    {
      "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
    }
  );
}, 100);
}
// componentWillUnmount() {
//   this.fooditem.DataTable.destroy(true)
// }
  // const [menu,setmenu] = useState([])
  // const [loading, setLoading] = useState(false);

  // const getMenuData = async () => {
  //   try {
  //     const data = await axios.get(
  //       "http://localhost:100/menu/display"
  //     );
  //     console.log(data);
  //     setmenu(data.data.data);
  //   }
  //   catch(e){
  //     console.log(e)
  //   }
  // }

  // const columns = [
  //   {
  //     dataField: "menu_name", text : "Menu Name"
  //   },
  //   {
  //     dataField: "menu_title", text : "Menu Title"
  //   },
  //   {
  //     dataField: "menu_desc", text : "Menu Description"
  //   },
  //   {
  //     dataField: "menu_price", text : "Menu Price"
  //   },
  //   {
  //     dataField: "menu_image", botton : "Menu Price"
  //   }
  // ]

  // useEffect(() =>{
  //   getMenuData();
  // }, []);
  render(){
  return (
    
    <div className="MainDiv" style={{textAlign:"center"}}>
       <Navbar/>
    
          <h3>Food Item</h3>
    
      
      <div className="container">
          
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Menu Name</th>
                    <th>Menu Title</th>
                    <th>Menu Description</th>
                    <th>Menu Price</th>
                    <th>Menu Image</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
            {this.state.menulist.map((menulist) => {
              return(
                <tr>
                    <td>{menulist.menu_name}</td>
                    <td>{menulist.menu_title}</td>
                    <td>{menulist.menu_desc}</td>
                    <td>{menulist.menu_price}</td>
                    <td><Image src={'http://localhost:100/images/' + menulist.menu_image}  width='40'/></td>
                    <td><Link to ={'updatemenu/'+ menulist._id}>Update</Link>| <button>Delete</button></td>

                   
                    
                </tr>
              )
            })}
                
            </tbody>
            
        </table>
          
        </div>
      </div>
  );
}
}

export default Products;
