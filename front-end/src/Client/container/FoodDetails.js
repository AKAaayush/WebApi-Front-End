import  { Component }   from "react"
import axios from 'axios'
import { Link } from 'react-router-dom';
import {  Image } from "react-bootstrap";
class FoodDetails extends Component{
    state = {
        menu_name : '',
        menu_title : '',
        menu_price : '',
        menu_desc : '',
        menu_image : '',
        menu : this.props.match.params.menu_name
    }
    

    componentDidMount(){
        axios.get('http://localhost:100/menu/name/' + this.state.menu)
        .then((response)=>{
            this.setState({
           menu_name : response.data.menu_name,
           menu_title : response.data.menu_title,
           menu_price : response.data.menu_price,
           menu_desc : response.data.menu_desc,
           menu_image : response.data.menu_image



            })   
    
          
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

   
    
    render(){
        return(
            <div>this is FoodDetails menu form

                <div>
                <a href=""> <Image src={'http://localhost:100/images/' + this.state.menu_image}  width='100'/></a>
                    
                        <p>{this.state.menu_name}  </p>
                        <p>{this.state.menu_price}</p>
                        <p>{this.state.menu_desc}</p>
                        <p> {this.state.menu_title}</p>
                  


              


                    
                </div>
            </div>
        )
    }
}


export default FoodDetails