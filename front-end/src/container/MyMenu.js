import axios from "axios";
import { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

class MyMenu extends Component {
    state = {
        menu: [],
     
    }
    componentDidMount() {
        axios.get('http://localhost:100/menu/display' )
            .then((response) => {
                console.log(response)
                this.setState({

                    menu: response.data.data
                })
            })

            .catch()
    }
    deleteProduct = (id) =>{
        axios.delete('http://localhost:100/menu/delete/' + id)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    
     }


    render() {
        return (
            <div className="container"> this is dispay menu

                <div className="row">


                    {this.state.menu.map((b) => {
                        return (

                            <div className="col-md-4">
                                <p>Id :{b._id}</p>
                                { b.menu_name}
                                <Image src={'http://localhost:100/images/' + b.menu_image}  width='100'/>
                                <Link to={'updatemenu/' + b._id} >Update</Link>/
                                {/* <p><Link to ='mymenu'  onClick={this.deleteProduct.bind(this, b._id)}>Delete</Link></p> */}

                                <a href="mymenu/" onClick={this.deleteProduct.bind(this, b._id)}>Delete</a>
                            </div>

                        )
                    })}

                </div>
            </div>

        )
    }
}

export default MyMenu