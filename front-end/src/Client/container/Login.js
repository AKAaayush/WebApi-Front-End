import React, { Component } from "react";
import axios from 'axios'
import {  Redirect } from 'react-router-dom';
//import { Container } from "react-bootstrap";

class Login extends Component {

  state = {
    email: '',
    password: '',
    loginSuccess: false
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
        console.log(response);
        this.setState({ loginSuccess: true })
        //token save cookies 
        localStorage.setItem('token', response.data.token)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }


  render() {
    if (this.state.loginSuccess === true) {
      return <Redirect to ='/home'/>

    }
  //   if(localStorage.getItem('token')){
  //     return <Redirect to='/home' />
  // }
    // else{
    //   return <Redirect to='/login' />

    // }


    return (

      // <div>
        
      //     <form>

      //       <input type="text" name="email" id="" placeholder="Username/Email" value={this.state.email} onChange={this.changeHandler} />

      //       <input type="password" name="password" id="" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
      //       <button type="submit" onClick={this.submitLogin}>Login</button>
      //     </form>

      
      // </div>
<>
    
    <div id="myModal" class="modal fade">
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
                {/* <input type="submit" class="btn btn-primary btn-block btn-lg" value="Login" onClick={this.submitLogin}/> */}
                <a href = "/home"onClick={this.submitLogin}>Login</a>
              </div>
            </form>				
            
          </div>
          <div class="modal-footer">
            <a href="/register">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>  
    </>
    )

  }
}

export default Login