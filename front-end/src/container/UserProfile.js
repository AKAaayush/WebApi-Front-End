import axios from "axios";
import { Component } from "react";


class UserProfile extends Component{
state = {
    name : '',
    email : '',
    address : '',
    user: {},
    config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }
}
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount(){
        axios.get('http://localhost:100/checklogin', this.state.config)
        .then((response)=>
        this.setState({
            user: response.data,
            name : response.data.name,
            address : response.data.address,
            email : response.data.email
        })
        )

        .catch((err)=>{
            console.log(err.response)
        })
        
    }

    render(){
        return(
            <div>
               <p>{this.state.user.name}</p>
            </div>
        )
    }
}


export default UserProfile