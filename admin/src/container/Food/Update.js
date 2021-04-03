import { Component } from "react";
import Navbar from '../../components/Navbar';
import axios from 'axios'

class FoodUpdate extends Component{
state = {
    food_name : '',
    food_price : '',
    food_desc : '',
    food_image : '',
    id : this.props.match.params.id
}
changeHandler = (e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

// fileHandler = (e)=> {
//     this.setState({
//         menu_image : e.target.files[0]
//     })
// }

componentDidMount(){
    axios.get('http://localhost:100/food/single/' + this.state.id)
    .then((response)=>{
        this.setState({
       food_name : response.data.food_name,
       food_price : response.data.food_price,
       food_desc : response.data.food_desc,
       food_image : response.data.food_image



        })   

      
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

updateFoodData = (e)=>{
    e.preventDefault()
    
    axios.put('http://localhost:100/food/update/:id', this.state)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
    render(){
        return(
            <div>
                <Navbar/>


                {/* <Paper elevation={10} style={paperStyle}></Paper> */}
                <div class="container" >

                    <div class="row">
                        <div class="col-lg-3 col-md-2"></div>
                        <div class="col-lg-6 col-md-8 login-box">
                            <div class="col-lg-12 login-key">
                                <i class="fa fa-hamburger" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-12 login-title">
                                Update Food 
                </div>

                            <div class="col-lg-12 login-form">
                                <div class="col-lg-12 login-form">
                                    <form>
                                        <div class="form-group">
                                            <label class="form-control-label">Food Name</label>
                                            <input type="text" class="form-control" name="food_name"  placeholder="Food Name" value={this.state.food_name}  onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Food Price</label>
                                            <input type="text" class="form-control" name="food_price"  placeholder="Food Price"  value= {this.state.food_price} onChange={this.changeHandler}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Food desc</label>
                                            <input type="text" class="form-control" name="food_desc" placeholder="Food desc"   onChange={this.changeHandler} value = {this.state.food_desc} />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Food Image</label>
                                            <input type="file" class="form-control" name="food_image"  placeholder="Password"  onChange={this.changeHandler} i />
                                        </div>


                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-8 login-btm login-button">
                                                {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                                <a  Redirect = "/fooditems"class="btn btn-outline-primary" style={{alignContent :'center'}} onClick = {this.updateFoodData}>Update</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>


                </div>
                {/* <Paper/> */}
            </div>
        )
    }
}

export default FoodUpdate