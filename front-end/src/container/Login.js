import React, { Component } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Container } from "react-bootstrap";

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
      return <Redirect to='/' />

    }
    // else{
    //   return <Redirect to='/login' />

    // }


    return (

      <div>
        <Container>
          <form>

            <input type="text" name="email" id="" placeholder="Username/Email" value={this.state.email} onChange={this.changeHandler} />

            <input type="password" name="password" id="" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
            <button type="submit" onClick={this.submitLogin}>Login</button>
          </form>

        </Container>
      </div>


    )

  }
}

export default Login