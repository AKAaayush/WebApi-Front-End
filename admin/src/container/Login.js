import { Component } from "react";
import axios from 'axios'
import {Redirect} from 'react-router-dom';
import Error from '../components/toast/error'

class Login extends Component {
    state = {
        account_email : '',
        password : '',
        loginChk : false,
        error:false,
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
            console.log("sss",response)
            if(response.data.success){
                console.log(response)
                localStorage.setItem('token', response.data.token)
            this.setState({
                loginChk : true
            })
            window.location.reload();
        }
        else{
            this.setState({ error: true })
       
             }
    
        })
        .catch((err)=>{
            this.setState({ error: true })
            console.log(err.response)
        })
        this.setState({ email: '', password: '' })
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
                                                <button class="btn btn-outline-primary" onClick={this.submitUser}>Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-2">
                        {this.state.error ? <Error message="Email or password incorrect" /> : null}

                            </div>
                        </div>
                    </div>


                </div>
                {/* <Paper/> */}
            </div>

        )
    }
}
export default Login