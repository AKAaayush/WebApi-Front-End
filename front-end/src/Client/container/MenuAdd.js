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
    inputHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    fileHandler = (e)=> {
        this.setState({
            menu_image : e.target.files[0]
        })
    }
    addMenu = (e) =>{
        e.preventDefault();
        // const data = {
        //     menu_name : this.state.menu_name,
        //     menu_price : this.state.menu_price,
        //     menu_title : this.state.menu_title,
        //     menu_desc : this.state.menu_desc,
        //     menu_image : this.state.menu_image
        // }
        const data = new FormData()
        
        data.append('menu_name' , this.state.menu_name)
        data.append('menu_price',this.state.menu_price)
        data.append('menu_title', this.state.menu_title)
        data.append('menu_desc', this.state.menu_desc)
        data.append('menu_image', this.state.menu_image)
    
      
        axios.post('http://localhost:100/addmenu',data)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })

          
    }
    
    render(){
        return(
            <div className ="Container">
                <div>This is add Menu form</div>
                <Container>
                <form>
               <p><lable>Menu Name:</lable> <input type="text"name ='menu_name' onChange={this.inputHandler} /></p> 
                 <p><lable>Menu Title:</lable> <input type="text"name ='menu_title'onChange={this.inputHandler}  /></p>
                <p><lable>Menu price:</lable> <input type="text"name ='menu_price' onChange={this.inputHandler} /></p>
                <p><lable>Menu desc:</lable> <input type="text" name ='menu_desc' onChange={this.inputHandler} /></p>
                {/* <p><lable>Menu image:</lable> <input type="file" value ={this.state.menu_image} onChange ={(event)=> this.setState({menu_image : event.target.value})} /></p> */}
                <p><lable>Menu image:</lable> <input type="file"name ='menu_image'  onChange={this.fileHandler} /></p>


                <Button onClick = {this.addMenu}>Add</Button>
                </form>
                </Container>

              
                </div>

            
        )
    }
}
 export default ProductAdd