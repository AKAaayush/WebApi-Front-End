import { Component } from "react";
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'

class CartView extends Component{
    state={
		'product' :[],
		
        cart : JSON.parse(localStorage.getItem('cart')),
		config: {
			headers: { 'Authorization': `Bearer ${localStorage.getItem('userToken')}` }
		}
    }
    componentDidMount(){
        console.log(this.state.cart)
    }
    deleteCartItem = (id)=> {
        var tepArray =[]
        var cart =localStorage.getItem('cart')
        if(!cart == []){
            tepArray = JSON.parse(cart)
        }
        tepArray = tepArray.filter(items => items.id!==id)
        localStorage.setItem('cart', JSON.stringify(tepArray))
        this.setState({
            cart:tepArray
        })
}

checkOutItem =(id)=>{
	axios.post('http://localhost:100/checkout')
	 product : this.state.cart.id
        .then((response)=>{
			
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
}
    render(){
		if (localStorage.getItem('userToken')) {
            var verify= 
			<>
			<section>
		  <div class="bg-title-sub-page bg-menu-page-02 ">
			  <div class="wrap-title-sub-page">
				  <h2 class="title-l" style={{color:'black'}}>Shopping Cart</h2>
				  <h6 class="title-s">Home / Shopping Cart</h6>
			  </div>
		  </div>
	  </section>
  
	  <section class="content-shopping-cart-page">
		  <div class="container">
			  <form>
				  <div class="wrap-table-shopping-cart">
					  <table class="table-shopping-cart">
						  <tr class="table_head">
							  <th class="column-1">Product</th>
							  <th class="column-2">Name</th>
							  <th class="column-3">Price</th>
							  <th class="column-4">Quantity</th>
							  <th class="column-5">Total</th>
							  <th class="column-6"></th>
						  </tr>
						  {this.state.cart.length==0?<div class="col-md-12"><p>no item available</p></div>:this.state.cart.map((item)=>{
							   return ( <tr>
							  <td class="column-1">
								  <div class="img-product">
									  <img src={'http://localhost:100/images/' + item.product.food_image} alt="img-product"/>
								  </div>
							  </td>
							  <td class="column-2">{item.product.food_name}</td>
							  <td class="column-3">$ {item.product.food_price}</td>
							  <td class="column-4">
								  <input class="input-num-product small-text" type="text" name="num-product" value="1" placeholder="1"/>
							  </td>
							  <td class="column-5">{item.quantity}</td>
							  <td class="column-6">
								  <i class="btn-remove-product fa fa-times" onClick={this.deleteCartItem.bind(this,item.id)} aria-hidden="true"></i>
							  </td>
						  </tr>)
						  })	}	
					  </table>
				  </div>
  
			  
  
				  
  
				  <div class="wrap-total clearfix">
						  <div class="style-pos col-right">
							  <h6 class="larg-text">Total: $100.00</h6>
							  <button class="btn-with-bg" onClick={this.checkOutItem}>Proceed To Checkout</button>
						  </div>
						  <div class="style-pos col-left">
							  <Link to="/home" class="small-text"><i class="fa fa-angle-left" aria-hidden="true"></i> Continue to shopping</Link>
						  </div>
				  </div>
			  </form>
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

export default CartView