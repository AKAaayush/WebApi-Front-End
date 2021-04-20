import { Component } from "react";
import Navbar from '../../components/Navbar';
import axios from 'axios'

class AdminAdd extends Component{
// state = {
//     name : '',
//     email : '',
//     address : '',
//     phone : '',
    
//     config: {
//         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//       },
    
//     id : this.props.match.params.id
// }

constructor(){
        super();
        this.state = {
          
          'email': '',
          'address': '',
          'name': '',
          'phone': '',
          'password': '',
            config: { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }},
       
          
        }
      }
changeHandler = (e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

// fileHandler = (e)=> {
//     this.setState({
//         menu_image : e.target.files[0]
//     })
// }


AddAdminData = (e)=>{
    e.preventDefault();
    const data = {
        name : this.state.name,
        email : this.state.email,
        address : this.state.address,
        gender : this.state.gender,
        phone : this.state.phone,
        dob : this.state.dob,
        password : this.state.password
      };
   
    axios.post('http://localhost:100/admin/add', data, this.state.config)
    .then((response)=>{
        console.log(response)
        window.location.replace('/admindetails')
    })
    
    .catch((err)=>{
        console.log(err.response)
    })

    window.location.href ="/admindetails"

    
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
                                Add Admin 
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
                                            <input type="text" class="form-control"  name = "phone" value = {this.state.phone}  onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Phone</label>
                                            <input type="text" class="form-control"  name = "password" value = {this.state.password}  onChange={this.changeHandler}  />
                                        </div>

                                        


                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-8 login-btm login-button">
                                                {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                                <a  href = "/admindetails"class="btn btn-outline-primary" style={{alignContent :'center'}} onClick={this.AddAdminData}>Add</a>
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

export default AdminAdd