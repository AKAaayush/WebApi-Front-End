import { Component } from "react";
import axios from 'axios'
import { Container, Button } from "react-bootstrap";



 class Register extends Component{
    constructor(){
        super();
        this.state = {
          'dob': '',
          'email': '',
          'gender': '',
          'name': '',
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
              <Container>
              
              <p>Name<input type="text" value={this.state.name}onChange={(event)=>this.setState({name: event.target.value})}/></p>
              <p>Address<input type="text" value={this.state.address}onChange={(event)=>this.setState({address: event.target.value})}/></p>
              <p>Phone<input type="text" value={this.state.phone}onChange={(event)=>this.setState({phone: event.target.value})}/></p>
              <p>DOB <input type="date" value={this.state.dob} onChange={(event) =>
                        this.setState({ dob: event.target.value })} className="form-control" name="dob" required/></p>
              <p>email<input type="text" value={this.state.email}onChange={(event)=>this.setState({email: event.target.value})}/></p>
              <label>Gender:</label>
              <p>Male <input type="radio" value ={this.state.gender} onClick={(event)=>this.setState({ gender: "Male" })} name="gender"/></p>
              <p>Female <input type="radio" value ={this.state.gender} onClick={(event)=>this.setState({ gender: "Female" })} name="gender"/></p>
              <p>Others <input type="radio" value ={this.state.gender} onClick={(event)=>this.setState({ gender: "Others" })} name="gender"/></p>
              <p>password<input type="password" value={this.state.password}onChange={(event)=>this.setState({password: event.target.value})}/></p>
              <Button onClick={this.registerUser} variant="primary" type="submit">
              Submit
              </Button>
    
              </Container>
              </div>
    
        
        )
    
      }
    }
    
    export default Register