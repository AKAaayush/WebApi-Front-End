import React, { Component } from "react";
import axios from 'axios'
import {  Redirect } from 'react-router-dom';
//import { Container } from "react-bootstrap";
import  '../components/Navbar/login.css'
class Login extends Component {
  constructor(props) {
    super(props)
  this.state = {
    email: '',
    password: '',
    loginSuccess: false,
    config: {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
  }
  }
} 

  // form handler
  changeHandler = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  //login function  handler 
  submitLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:100/user/login", this.state)
    .then((response) => {
      localStorage.setItem('userToken', response.data.token)
      
      this.setState({ loginSuccess: true })
      window.location.reload();

    }).catch((err) =>{
    
     this.setState({ loginSuccess: false })
     localStorage.setItem('NoauthToken')
    
    } )
  this.setState({ email: '', password: '' })
  
  }
  


  render() {

    if (this.state.loginSuccess === true) {
      console.log("here")
      return <Redirect to ='/home'/>
     

    }
  


    return (

      
<div className = "login">
{/* {this.state.loginSuccess == false ? <Error message="Email or password incorrect" /> : null} */}
  <div className = "logtext">
    <h1><i class="fa fa-user" aria-hidden="true"></i></h1>
    <h1>Login</h1>
  </div>
<form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" name="email" id="" placeholder="Username/Email" value={this.state.email} onChange={this.changeHandler} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" name="password" id="" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/>
    <label class="form-label" for="form2Example2">Password</label>
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
  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={this.submitLogin}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p>Not a member? <a href="/register">Register</a></p>
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
    
    {/* <div id="myModal" class="modal fade">
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">				
            <h4 class="modal-title">Member Login</h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">
            <form action="/examples/actions/confirmation.php" method="post">
              <div class="form-group">
                <i class="fa fa-user"></i>
                <input type="text" class="form-control"name="email" id="" placeholder="Username/Email" value={this.state.email} onChange={this.changeHandler} />
              </div>
              <div class="form-group">
                <i class="fa fa-lock"></i>
                <input type="password" class="form-control" name="password" id="" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/>					
              </div>
              <div class="form-group">
                
                <a href = "/home"onClick={this.submitLogin}>Login</a>
              </div>
            </form>				
            
          </div>
          <div class="modal-footer">
            <a href="/register">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>   */}
    </div>
    )

  }
}

export default Login