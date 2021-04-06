import  { Component }   from "react"
import axios from 'axios'
import { Link } from 'react-router-dom';
import {  Image } from "react-bootstrap";
class MenuDetails extends Component{
    state = {
        menu_name : '',
        menu_title : '',
        menu_price : '',
        menu_desc : '',
        menu_image : '',
        menu : this.props.match.params.menu_name
    }
    

    componentDidMount(){
        axios.get('http://localhost:100/menu/name/' + this.state.menu)
        .then((response)=>{
            this.setState({
           menu_name : response.data.menu_name,
           menu_title : response.data.menu_title,
           menu_price : response.data.menu_price,
           menu_desc : response.data.menu_desc,
           menu_image : response.data.menu_image



            })   
    
          
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

   
    
    render(){
        return(
            // <div>this is FoodDetails menu form

            //     <div>
            //     <a href=""> <Image src={'http://localhost:100/images/' + this.state.menu_image}  width='100'/></a>
                    
            //             <p>{this.state.menu_name}  </p>
            //             <p>{this.state.menu_price}</p>
            //             <p>{this.state.menu_desc}</p>
            //             <p> {this.state.menu_title}</p>
                  


              


                    
            //     </div>
            // </div>

            <>
			<section>
		<div class="bg-title-sub-page bg-menu-page-02 ">
			<div class="wrap-title-sub-page">
				<h2 class="title-l" style={{color:'black'}}>Menu Details</h2>
				<h6 class="title-s">Menu Details</h6>
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
										<img src={'http://localhost:100/images/' +this.state.menu_image} alt="IMG-SLIDE"/>
									</div>
                                    <div class="wrap-main-pic">
										<div class="main-pic wrap-pic">
											<img src={'http://localhost:100/images/' + this.state.menu_image} alt="IMG-SLIDE"/>
										</div>
									</div>
									
									
									
									
								</div>
							</div>
							
							
							
					</div>	
				</div>

				<div class="col-responsive-product col-sm-10 col-md-5">
					<div class="product">
						<h3 class="name-product medium-text-2">{this.state.menu_name} </h3>
						<span class="price-product medium-text">{this.state.menu_price} </span>
						<p>
                        {this.state.menu_desc} 
						</p>
						
						<input class="input-num-product small-text" type="number" name="quantity" value ={this.state.quantity}  placeholder="1" onChange ={this.inputHandler}/>
						
						<button class="btn-add-to-cart-product btn-with-bg">ADD TO CART</button>
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
        )
    }
}


export default MenuDetails