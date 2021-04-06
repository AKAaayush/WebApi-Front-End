import { Component } from "react";
import Navbar from '../../components/Navbar';
import axios from 'axios'
import { Redirect } from "react-router";

class MenuUpdate extends Component{
state = {
    name : '',
    email : '',
    address : '',
    phone : '',
    
    config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      },
    
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
    axios.get('http://localhost:100/user/display/' + this.state.id, this.state.config)
    .then((response)=>{
        this.setState({
            name : response.data.data.name,
            email : response.data.data.email,
            address : response.data.data.address,
            phone : response.data.data.phone,
            
 

        })   

      
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

updateUserData = (e)=>{
    e.preventDefault()
    
   
    axios.put('http://localhost:100/user/adminupdate/:id', this.state, this.state.config)
    .then((response)=>{
        console.log(response)
        window.location.replace('/userdetails')
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
                                Update User 
                </div>

                            <div class="col-lg-12 login-form">
                                <div class="col-lg-12 login-form">
                                    <form>
                                        <div class="form-group">
                                            <label class="form-control-label">Name</label>
                                            <input type="text" class="form-control" name = "name" value={this.state.name}  onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">EMail</label>
                                            <input type="text" class="form-control" name = "email" value ={this.state.email} onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">address</label>
                                            <input type="text" class="form-control" name = "address" value ={this.state.address} onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Phone</label>
                                            <input type="text" class="form-control"  name = "menu_title" value = {this.state.phone}  onChange={this.changeHandler}  />
                                        </div>

                                        


                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-8 login-btm login-button">
                                                {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                                <a  href = ""class="btn btn-outline-primary" style={{alignContent :'center'}} onClick={this.updateUserData}>Update</a>
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