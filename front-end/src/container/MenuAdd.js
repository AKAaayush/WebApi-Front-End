// import { Button } from "bootstrap";
import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import axios from 'axios'
class ProductAdd extends Component{
    constructor(){
        super();
        this.state ={
            'menu_name' : '',
            'menu_title' : '',
            'menu_price' : '',
            'menu_desc' : '',
            'menu_image' : '',
            config : {
                header : {'authorization': `Bearer ${localStorage.getItem('token')}`}
            }
        }
    }
    addMenu = (e) =>{
   
        const data = {
            menu_name : this.state.menu_name,
            menu_price : this.state.menu_price,
            menu_title : this.state.menu_title,
            menu_desc : this.state.menu_desc,
            menu_image : this.state.menu_image


         

        }
        e.preventDefault();
        axios.post('http://localhost:100/addmenu',data).then((response) =>{

            this.setState({ isRegisterIn: true })
          })
    }
    render(){
        return(
            <div className ="Container">
                <div>This is add Menu form</div>
                <Container>
                <form>
               <p><lable>Menu Name:</lable> <input type="text" value ={this.state.menu_name} onChange ={(event)=> this.setState({menu_name : event.target.value})} /></p> 
                 <p><lable>Menu Title:</lable> <input type="text"value ={this.state.menu_title} onChange ={(event)=> this.setState({menu_title : event.target.value})}  /></p>
                <p><lable>Menu price:</lable> <input type="text" value ={this.state.menu_price} onChange ={(event)=> this.setState({menu_price : event.target.value})} /></p>
                <p><lable>Menu desc:</lable> <input type="text" value ={this.state.menu_desc} onChange ={(event)=> this.setState({menu_desc : event.target.value})} /></p>
                {/* <p><lable>Menu image:</lable> <input type="file" value ={this.state.menu_image} onChange ={(event)=> this.setState({menu_image : event.target.value})} /></p> */}
                <p><lable>Menu image:</lable> <input type="text" value ={this.state.menu_image} onChange ={(event)=> this.setState({menu_image : event.target.value})} /></p>


                <Button onClick = {this.addMenu}>Add</Button>
                </form>
                </Container>

              
                </div>

            
        )
    }
}
 export default ProductAdd