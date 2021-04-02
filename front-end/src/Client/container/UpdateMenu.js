import { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
class UpdateMenu extends Component{
    state = {
        menu_name : '',
        menu_title : '',
        menu_price : '',
        menu_desc : '',
        menu_image : '',
        id : this.props.match.params.id
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fileHandler = (e)=> {
        this.setState({
            menu_image : e.target.files[0]
        })
    }

    componentDidMount(){
        axios.get('http://localhost:100/menu/single/' + this.state.id)
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

    updateMenuData = (e)=>{
        e.preventDefault()
        
        axios.put('http://localhost:100/menu/update/:id', this.state)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    
    render(){
        return(
            <div>this is update menu form

                <div>
                    <form>
                        <p>Menu Name : <input type ="text" name = "menu_name" value={this.state.menu_name} onChange={this.changeHandler} /></p>
                        <p>Menu Price : <input type ="text" name = "menu_price" value ={this.state.menu_price}onChange={this.changeHandler} /></p>
                        <p>Menu Desc : <input type ="text" name = "menu_desc" value ={this.state.menu_desc}onChange={this.changeHandler} /></p>
                        <p>Menu Title : <input type ="text" name = "menu_title" value = {this.state.menu_title}onChange={this.changeHandler} /></p>
                        <p>Menu Image : <input type ="file" name = "menu_image" onChange={this.fileHandler} /></p>
                        <p>
                   {/* <button onClick={this.updateMenuData} Link to = 'menudisplay/'>Update</button> */}
                   <Link to="/mymenu" className="btn btn-primary" onClick={this.updateMenuData}>Update</Link>
                   


                </p>


                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateMenu