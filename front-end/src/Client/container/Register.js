import { Component } from "react";
import axios from 'axios'




 class Register extends Component{
    constructor(){
        super();
        this.state = {
          'dob': '',
          'email': '',
          'gender': '',
          'name': '',
          'address':'',
          'phone': '',
          'password': '',
          'confirmpassword':'',
          
        }
      }
        registerUser = ()=>{
          const data = {
            name : this.state.name,
            email : this.state.email,
            address : this.state.address,
            gender : this.state.gender,
            phone : this.state.phone,
            dob : this.state.dob,
            password : this.state.password
          };
          axios.post('http://localhost:100/user/add',data).then((response) =>{
            this.setState({ isRegisterIn: true })
          })
        }
    
      
        render(){ 
            return(
              
              <div>


<div className = "login">
  <div className = "logtext">
    <h1><i class="fa fa-user-plus" aria-hidden="true"></i></h1>
    <h1>Sign-Up</h1>
  </div>
<form>

{/* full Name */}
 <div class="form-outline mb-4">
 <label class="form-label" for="form2Example1">Full Name</label>
    <input type="text" id="form2Example1" class="form-control" value={this.state.name}onChange={(event)=>this.setState({name: event.target.value})} />
    
  </div>
  
  {/* Address */}
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Address</label>
    <input type="text" id="form2Example1" class="form-control" value={this.state.address}onChange={(event)=>this.setState({address: event.target.value})} />
   
  </div>

  {/* Phone */}
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Phone</label>
    <input type="number" id="form2Example1" class="form-control" value={this.state.phone}onChange={(event)=>this.setState({phone: event.target.value})} />
   
  </div>

  {/* Gender */}
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Gender</label><br></br>
  Male : <input type="radio" value ={this.state.gender} onClick={(event)=>this.setState({ gender: "Male" })} name="gender"/>
              Female  : <input type="radio" value ={this.state.gender} onClick={(event)=>this.setState({ gender: "Female" })} name="gender"/>
              Others  :<input type="radio" value ={this.state.gender} onClick={(event)=>this.setState({ gender: "Others" })} name="gender"/>
 
  </div>

  {/* DOB */}
  <div class="form-outline mb-4">
 <label class="form-label" for="form2Example1">Full Name</label>
    <input type="date" id="form2Example1" class="form-control" value={this.state.dob} onChange={(event) =>
                        this.setState({ dob: event.target.value })} />
    
  </div>

  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" name="email" id="" value={this.state.email}onChange={(event)=>this.setState({email: event.target.value})} />
    
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" name="password" value={this.state.password}onChange={(event)=>this.setState({password: event.target.value})}/>
    
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="form2Example3"
          checked
        />
        <label class="form-check-label" for="form2Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={this.registerUser}>Sign Up</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
    
   
    </div>
              </div>
    
        
        )
    
      }
    }
    
    export default Register