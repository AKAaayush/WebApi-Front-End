import { Component } from "react";
import Navbar from '../../components/Navbar';
import axios from 'axios'

class FoodUpdate extends Component{
state = {
    food_name : '',
    food_price : '',
    food_desc : '',
    food_image : '',
    id : this.props.match.params.id,
    config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      },
}
changeHandler = (e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

fileHandler = (e)=> {
    console.log(e.target.files)
    this.setState({
        food_image : e.target.files[0]
    })
}

componentDidMount(){
    axios.get('http://localhost:100/food/single/' + this.state.id, this.state.config)
    .then((response)=>{
        this.setState({
       food_name : response.data.data.food_name,
       food_price : response.data.data.food_price,
       food_desc : response.data.data.food_desc,
       food_image : response.data.data.food_image



        })   

      
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

updateFoodData = (e)=>{
    e.preventDefault()
    const data = new FormData()
    
    data.append('food_name' , this.state.food_name)
    data.append('food_price',this.state.food_price)
    data.append('food_desc', this.state.food_desc)
    data.append('food_image', this.state.food_image)
    console.log(this.state.food_image)
    axios.put('http://localhost:100/food/update/'+ this.state.id, data, this.state.config)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.response)
    })
    window.location.href ="/fooditems"
}
    render(){
        return(
            <div>
                <Navbar/>
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
                                            <input type="file" class="form-control" name="food_image"  placeholder="Password"  onChange={this.fileHandler} i />
                                        </div>


                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-8 login-btm login-button">
                                                {/* <button type="submit" class="btn btn-outline-primary" onClick={this.AdminLogin}>LOGIN</button> */}
                                                <a  href = "/fooditems"class="btn btn-outline-primary" style={{alignContent :'center'}} onClick = {this.updateFoodData}>Update</a>
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