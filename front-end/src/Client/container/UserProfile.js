import axios from "axios";
import { Component } from "react";
import {  Redirect } from 'react-router-dom';


class UserProfile extends Component{
state = {
    name : '',
    email : '',
    address : '',
    phone : '',
    user: {},
    config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('userToken')}` }
    }
}
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount(){
        axios.get('http://localhost:100/checkuserlogin', this.state.config)
        .then((response)=>
        this.setState({
            user: response.data,
            name : response.data.name,
            address : response.data.address,
            email : response.data.email,
            phone : response.data.phone
        })
        )

        .catch((err)=>{
            console.log(err.response)
        })
        
    }
        // form handler
  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }
    sendprofile = () => {
        const data = {
            name: this.state.name,
            phone: this.state.phone,
            address: this.state.address
      
          }
        axios.put('http://localhost:100/user/update/'+ this.state.user._id, data,this.state.config).then(function(){
          window.location.reload();
        })
      }
      sendprofilepic = () => {
        let formdata = new FormData();
        formdata.append('image',this.state.profileimage[0])
        console.log(this.state.profileimage[0])
        axios.put('http://localhost:100/updateProfile/'+ this.state.user._id, formdata,this.state.config).then(function(){
          window.location.reload();
        })
      }
      
    render(){
        if (localStorage.getItem('userToken')) {
            var verify= 
            <div class="container">
            <div class="row justify-content-center">
                
                <div class="col-12 col-lg-10 col-xl-8 mx-auto">
                <h1 style= {{textAlign:'center'}}>Profile</h1>
                    <div class="my-4">
                
                        <form>
                            <div class="row mt-5 align-items-center">
                                <div class="col-md-3 text-center mb-5">
                                    <div class="avatar avatar-xl">
                                        <img src={"http://localhost:100/images/" + this.state.user.image} alt="..." class="avatar-img rounded-circle" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-md-7">
                                            <h4 class="mb-1">{this.state.user.name}</h4>
                                            <p class="small mb-3"><span class="badge badge-dark">{this.state.user.address}</span></p>
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                     
                                        <div class="col">
                                            <p class="small mb-0 text-muted">{this.state.user.email}</p>
                                            <p class="small mb-0 text-muted">DOB:{this.state.user.dob}</p>
                                            <p class="small mb-0 text-muted">Contact: {this.state.user.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="firstname">Name</label>
                                    <input className="form-control" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                                </div>
              
                            </div>
                            <div class="form-group">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control"  placeholder="example@asher.me"value ={this.state.user.email} />
                            </div>
                            <div class="form-row">
                            <div class="form-group col-md-6">
                            
                                <label for="inputAddress5">Address</label>
                                <input className="form-control" name="address" type="text" value={this.state.address} onChange={this.handleChange} />
                           
                          
                            </div>
                            
                            <div class="form-group col-md-6">
                                <label for="inputAddress5">Phone Number</label>
                                <input className="form-control" name="phone" type="text" value={this.state.phone} onChange={this.handleChange} />
                            </div>
                            </div>
                            
                
                           
                            <div class="form-row">
                            
                                <div class="form-group col-md-6">
                                    <label for="inputState5">Gender</label>
                                <input type="text" class="form-control" id="inputAddress5"  value ={this.state.user.gender} />
            
                                    
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputZip5"> Profile Picture</label>
                                    <input className="form-control" type="file" onChange={(event) =>
                                                                this.setState({ profileimage: event.target.files })} placeholder="Upload Image" />
                                </div>
                                <div class="form-group col-md-3"  style ={{padding:"30px"}}>
                                   
                                    <button type="button" onClick={this.sendprofilepic} className="btn btn-primary">Upload</button>
                                </div>
                            </div>
                            <hr class="my-4" />
                            
                            <button type="submit" onClick={this.sendprofile} class="btn btn-primary" value="Save Changes">Save Change</button>
                        </form>
                    </div>
                </div>
            </div>
            
            </div>
          }
          else{
            var auth = 
            <Redirect to = "/login"></Redirect>
        }
    
        return(
            // <div>
            //    <p>{this.state.user.name}</p>
            // </div>
            <>
            {verify}
            {auth}
            </>
         
        )
    }
}


export default UserProfile