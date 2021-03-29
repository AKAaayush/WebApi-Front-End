import axios from "axios";
import { Component } from "react";


class UserProfile extends Component{
state = {
    name : '',
    email : '',
    address : '',
    id : this.props.match.params.id
}
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount(){
        axios.get('http://localhost:100/user/display/'+ this.state.id)
        .then((response)=>
        this.setState({
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
                this is userprofile page
            </div>
        )
    }
}


export default UserProfile