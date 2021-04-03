import { Component } from "react";
import axios from 'axios'
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = {
        account_email : '',
        password : '',
        loginChk : false
    }

     // form handler
  changeHandler = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }


    //login function  handler 
    submitUser = (e)=>{
        
        e.preventDefault();
     
        axios.post('http://localhost:100/admin/login', this.state)
        .then((response)=>{
            this.setState({
                loginChk : true
            })
          //  localStorage.setItem('token', response.data.token);
          localStorage.setItem('token', response.data.token)
        //   localStorage.getItem('token', response.data.token)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    

    render() {
        // redirect
        if(this.state.loginChk===true){
            return <Redirect to='/home' />
        }
        return (

            <div>


                {/* <Paper elevation={10} style={paperStyle}></Paper> */}
                <div class="container" >

                    <div class="row">
                        <div class="col-lg-3 col-md-2"></div>
                        <div class="col-lg-6 col-md-8 login-box">
                            <div class="col-lg-12 login-key">
                                <i class="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-12 login-title">
                                ADMIN PANEL
                </div>

                            <div class="col-lg-12 login-form">
                                <div class="col-lg-12 login-form">
                                    <form>
                                        <div class="form-group">
                                            <label class="form-control-label">Email</label>
                                            <input type="email" class="form-control" name="email" id="" placeholder="Username/Email" value={this.state.email} onChange={this.changeHandler} i/>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">PASSWORD</label>
                                            <input type="password" class="form-control" name="password" id="" placeholder="Password" value={this.state.password} onChange={this.changeHandler} i />
                                        </div>

                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-6 login-btm login-text">
                                            </div>
                                            <div class="col-lg-6 login-btm login-button">
                                                {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                                <a  class="btn btn-outline-primary" onClick={this.submitUser}>Login</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-2"></div>
                        </div>
                    </div>


                </div>
                {/* <Paper/> */}
            </div>

        )
    }
}
export default Login