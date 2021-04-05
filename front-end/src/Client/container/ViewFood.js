import { Component } from "react";
import axios from 'axios'
// import {  Image } from "react-bootstrap";
import {  Redirect } from 'react-router-dom';

class ViewFood extends Component {
    state = {
        food : '',
        quantity:'1',
        foods : this.props.match.params.food_name,
		config: {
			headers: { 'Authorization': `Bearer ${localStorage.getItem('userToken')}` }
		}
    }

    componentDidMount(){
        axios.get('http://localhost:100/food/name/' + this.state.foods)
        .then((response)=>{
            console.log(response.data)
            this.setState({
            food : response.data,
            })   
    
          
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    addtoCart = ()=> {
        var tepArray =[]
        var cart =localStorage.getItem('cart')
        console.log(cart)
        if(!cart == []){
            tepArray = JSON.parse(cart)
        }
        tepArray = tepArray.filter(items => items.id!==this.state.food._id)
        tepArray.push({quantity:this.state.quantity,product:this.state.food,id:this.state.food._id})
        localStorage.setItem('cart', JSON.stringify(tepArray))
    
}

inputHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
    render(){
		if (localStorage.getItem('userToken')) {
            var verify= 
			<>
			<section>
		<div class="bg-title-sub-page bg-menu-page-02 ">
			<div class="wrap-title-sub-page">
				<h2 class="title-l">Food Details</h2>
				<h6 class="title-s">Food Details</h6>
			</div>
		</div>
	</section>

    <section className = "content-shop-page">
        <div className = "container">

        <div class="row">
				<div class="col-responsive-product col-sm-10 col-md-7">
					<div class="wrap-slide-img-product row" id="slide100-01">
							<div class="col-12">
								<div class="main-frame">
									<div class="fix-frame wrap-pic">
										<img src={'http://localhost:100/images/' + this.state.food.food_image} alt="IMG-SLIDE"/>
									</div>
                                    <div class="wrap-main-pic">
										<div class="main-pic wrap-pic">
											<img src={'http://localhost:100/images/' + this.state.food.food_image} alt="IMG-SLIDE"/>
										</div>
									</div>
									
									
									
									
								</div>
							</div>
							
							
							
					</div>	
				</div>

				<div class="col-responsive-product col-sm-10 col-md-5">
					<div class="product">
						<h3 class="name-product medium-text-2">{this.state.food.food_name}</h3>
						<span class="price-product medium-text">{this.state.food.food_price}</span>
						<p>
                        {this.state.food_desc}
						</p>
						
						<input class="input-num-product small-text" type="number" name="quantity" value ={this.state.quantity}  placeholder="1" onChange ={this.inputHandler}/>
						
						<button onClick={this.addtoCart} class="btn-add-to-cart-product btn-with-bg">ADD TO CART</button>
					</div>

					<div class="info-product">
						<h4 class="title-info-product show small-text ">Additionial Information<span class="small-text show-content-info-product">+</span></h4>
						<div class="content-info-product">
							<p>
								In ultricies arcu ac tellus mattis, rutrum semper felis gravida. Vestibulum dictum ante nibh, nec eleifend purus molestie nec. Vivamus ligula nulla, consectetur ornare velit at, vulputate iaculis nisi. Suspendisse placerat mauris aliquam nulla bibendum, et porta massa fermentum.
							</p>
							<p>
								Nateger condimentum a ante et molestie. Cras eu ante massa. Sed eget finibus risus. Proin aliquet ex ac imperdiet lobortis.
							</p>
						</div>
					</div>

					<div class="info-product">
						<h4 class="title-info-product small-text">Reviews<span class="small-text show-content-info-product">+</span></h4>
						<div class="content-info-product">
							<p>
								In ultricies arcu ac tellus mattis, rutrum semper felis gravida. Vestibulum dictum ante nibh, nec eleifend purus molestie nec. Vivamus ligula nulla, consectetur ornare velit at, vulputate iaculis nisi. Suspendisse placerat mauris aliquam nulla bibendum, et porta massa fermentum.
							</p>
							<p>
								Nateger condimentum a ante et molestie. Cras eu ante massa. Sed eget finibus risus. Proin aliquet ex ac imperdiet lobortis.
							</p>
						</div>
					</div>
				</div>
			</div>
            
        </div>
    </section>
</>
		}
		else{
            var auth = 
            <Redirect to = "/login"></Redirect>
        }
        return(


<>


{verify}
{auth}

            </>
        )
    }
}

export default ViewFood