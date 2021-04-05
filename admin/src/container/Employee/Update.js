import { Component } from "react";
import Navbar from '../../components/Navbar';
import axios from 'axios'

class StaffUpdate extends Component{
    state = {
        employee_name : '',
        employee_email : '',
        employee_address : '',
        employee_phone : '',
        employee_image: '',
        id : this.props.match.params.id
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fileHandler = (e)=> {
        console.log(e.target.files)
        this.setState({
            employee_image : e.target.files[0]
        })
    }

    componentDidMount(){
        axios.get('http://localhost:100/employee/single/' + this.state.id)
        .then((response)=>{
            this.setState({
           employee_name : response.data.employee_name,
           employee_email : response.data.employee_email,
           employee_address : response.data.employee_address,
           employee_phone : response.data.employee_phone,
           employee_image : response.data.employee_image
    
    
    
            })   
    
          
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    updateEmployeeData = (e)=>{
        e.preventDefault()
        const data = new FormData()
        
        data.append('employee_name' , this.state.employee_name)
        data.append('employee_email',this.state.employee_email)
        data.append('employee_address', this.state.employee_address)
        data.append('employee_phone', this.state.employee_phone)
        data.append('employee_image', this.state.employee_image)
        console.log(this.state.employee_image)
        axios.put('http://localhost:100/employee/update/'+ this.state.id, data)
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
                                <i class="fa fa-hamburger" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-12 login-title">
                                Update Staff 
                </div>

                            <div class="col-lg-12 login-form">
                                <div class="col-lg-12 login-form">
                                    <form>
                                        <div class="form-group">
                                            <label class="form-control-label">Name</label>
                                            <input type="text" class="form-control" name="employee_name"  placeholder="Name" value={this.state.employee_name}  onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Email</label>
                                            <input type="text" class="form-control" name="employee_email"  placeholder="email"  value= {this.state.employee_email} onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Address</label>
                                            <input type="text" class="form-control" name="employee_address" placeholder="address"   onChange={this.changeHandler} value = {this.state.employee_address} />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Phone</label>
                                            <input type="text" class="form-control" name="employee_phone" placeholder="phone"   onChange={this.changeHandler} value = {this.state.employee_phone} />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label"> Image</label>
                                            <input type="file" class="form-control" name="employee_image"  placeholder="Password"  onChange={this.fileHandler} i />
                                        </div>


                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-8 login-btm login-button">
                                                {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                                <a  href = "/employeedetails"class="btn btn-outline-primary" style={{alignContent :'center'}} onClick = {this.updateEmployeeData}>Update</a>
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

export default StaffUpdate