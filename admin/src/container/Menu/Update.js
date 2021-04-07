import { Component } from "react";
import Navbar from '../../components/Navbar';
import axios from 'axios'

class MenuUpdate extends Component{
state = {
    menu_name : '',
    menu_title : '',
    menu_price : '',
    menu_desc : '',
    menu_image : '',
    id : this.props.match.params.id,
    config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    
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
    axios.get('http://localhost:100/menu/single/' + this.state.id, this.state.config)
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
    const data = new FormData()
    
    data.append('menu_name' , this.state.menu_name)
    data.append('menu_price',this.state.menu_price)
    data.append('menu_title',this.state.menu_title)
    data.append('menu_desc', this.state.menu_desc)
    data.append('menu_image', this.state.menu_image)
    axios.put('http://localhost:100/menu/update/' + this.state.id, data, this.state.config)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
    render(){
        return(
            <div>
                <Navbar/>


                {/* <Paper elevation={10} style={paperStyle}></Paper> */}
                <div class="container" >

                    <div class="row">
                        <div class="col-lg-3 col-md-2"></div>
                        <div class="col-lg-6 col-md-8 login-box">
                            <div class="col-lg-12 login-key">
                                <i class="fa fa-book" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-12 login-title">
                                Update Food 
                </div>

                            <div class="col-lg-12 login-form">
                                <div class="col-lg-12 login-form">
                                    <form>
                                        <div class="form-group">
                                            <label class="form-control-label">Menu Name</label>
                                            <input type="text" class="form-control" name = "menu_name" value={this.state.menu_name}  onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Menu Price</label>
                                            <input type="text" class="form-control" name = "menu_price" value ={this.state.menu_price} onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Menu desc</label>
                                            <input type="text" class="form-control" name = "menu_desc" value ={this.state.menu_desc} onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Menu Title</label>
                                            <input type="text" class="form-control"  name = "menu_title" value = {this.state.menu_title}  onChange={this.changeHandler}  />
                                        </div>

                                        <div class="form-group">
                                            <label class="form-control-label">Menu Image</label>
                                            <input type="file" class="form-control" name="food_image"  placeholder="Password"  onChange={this.fileHandler} i />
                                        </div>


                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-8 login-btm login-button">
                                                {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                                <a  href = "/fooditems"class="btn btn-outline-primary" style={{alignContent :'center'}} onClick={this.updateMenuData}>Update</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>


                </div>
                {/* <Paper/> */}
            </div>
        )
    }
}

export default MenuUpdate