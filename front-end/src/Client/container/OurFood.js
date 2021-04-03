import { Component } from "react";
import axios from "axios";

class OurFood extends Component{
    state = {
        fooditem: [],
           config : {
      header : {'authorization': `Bearer ${localStorage.getItem('token')}`}
  }

    }

    componentDidMount() {
        axios.get('http://localhost:100/fooditem/display')
            .then((response) => {
                console.log(response)
                this.setState({

                    fooditem: response.data.data
                })
            })

            .catch()
    }
    render(){
        return(
    <section className="content-shop-page">
        <div className="container">
               
            <div class="wrap-related-product">
				<h6 class="medium-text">Discover Our</h6>
				<h3 class="larg-text">Related Products</h3>
			</div>
            <div class="middle-shop-list row">
            {this.state.fooditem.map((fooditem) => {
                return (
                    <>
            
            <div class="col-item col-sm-8 col-md-6 col-lg-3">
					<div class="item-shop-page">
						<div class="img-item">
							<a href="product-detail.html"><img src={'http://localhost:100/images/' + fooditem.food_image} alt="img-food"/></a>
						</div>
						<a href="product-detail.html"><h4 class="name-item">{fooditem.food_name}</h4></a>
						<p class="price-item">{fooditem.food_price}</p>
						<button class="btn-with-bg add-to-cart">ADD TO CART</button>
					</div>
				</div>
            
            </>
                )
            })}
            </div>
        </div>
        </section>
        )
    }
}
export default OurFood