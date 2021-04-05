import axios from 'axios';
import { Component } from 'react';

class UserProfile extends Component{
    constructor(props) {
        super(props)
    this.state = {
        name : '',
        email :'',
        user : {},
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
}

    componentDidMount() {
        axios.get('http://localhost:100/checkLogin', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data,
                    name:response.data.name,
                    email:response.data.email,
                   
                })
               

            })
    }
     render(){

        return(
            <div>
                <p> {this.state.user.name}</p>
                <p> {this.state.user.email}</p>
            </div>
        )
     }
}

export default UserProfile