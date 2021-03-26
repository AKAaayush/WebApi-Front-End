
import {Link} from 'react-router-dom';
const { Component} = require("react")


class Header extends Component{
 render(){
     return (
        //  <div>This is Header</div>
        //  <div>
        //         <Link to = '/'>Home</Link>
        //         <Link to = '/register'>Register</Link>
        //         <Link to = '/login'>Login</Link>
        //         <Link to = '/menuadd'>Menu Add</Link>
        //         <Link to = '/mymenu'>Menu Display</Link>
        //         <Link to = '/updatemenu'>Update Menu</Link>


        //  </div>
        <div className = "head">
        <header>
		
		<div id="wrap_header" >
			<div class="logo col_header">
				<a href="index.html"><img alt="logo-deli" src="assets/images/icons/visa.png"/></a>
			</div>
			<div class="main_nav">
				<nav class="menu col_header">
					<ul class="main_menu">
						<li>
						<Link to = '/Home'>Home</Link>

						</li>
						<li><Link to = '/mymenu'>Menu</Link>
							
						</li>
						<li><a href="reservation-01.html" class="have_sub_menu">Reservation</a>
							<ul class="sub_menu">
								<li><a href="reservation-01.html">Reservation V1</a></li>
								<li><a href="reservation-02.html">Reservation V2</a></li>
								<li><a href="reservation-03.html">Reservation V3</a></li>
							</ul>
						</li>
						<li><a href="about-us.html">About us</a></li>
						<li><a href="shop-page.html">Features</a>
							<ul class="sub_menu">
								<li><a href="shop-page.html">Shop Page</a></li>
								<li><a href="shopping-cart.html">Shopping Cart</a></li>
								<li><a href="check-out.html">Check Out</a></li>
							</ul>
						</li>
						<li><a href="#myModal" class="trigger-btn" data-toggle="modal">Login</a>

						
						</li>
						<li><a href="contact-us.html">Contact</a></li>
					</ul>
				</nav>
			</div>

			
			<div class="icon-header col_header">
				<i class="fa fa-facebook" aria-hidden="true"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				<i class="fa fa-tripadvisor" aria-hidden="true"></i>
				<i class="fa fa-instagram" aria-hidden="true"></i>
			</div>
		</div>

		
		<div id="wrap_header_mobile">
		
					
			<div class="logo-mobile">
				<a href="index.html"><img alt="logo-deli" src="images/icons/logo-mobile.png"/></a>
			</div>

			<div class="btn-show-menu">
				<button class="btn-show-menu-mobile hamburger hamburger--squeeze is active" type="button">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>
			</div>	
		</div>

		<div class="wrap-side-menu" >
			<nav class="side-menu">
				<ul class="main-menu">
					<li>
						<a href="index.html">Home</a>
						<i class="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
						<ul class="sub-menu">
							<li><a href="index.html">Homepage</a></li>
							<li><a href="home-boxed.html">Homepage Boxed</a></li>
							<li><a href="home-outgrid.html">Homepage Outgrid</a></li>
							<li><a href="home-showcase.html">Homepage Showcase</a></li>
							<li><a href="home-vertical-menu.html">Home Vertical Menu</a></li>
							<li><a href="home-onepage.html">Homepage Onepage</a></li>
						</ul>
					</li>
					<li>
						<a href="menu-01.html">Menus</a>
						<i class="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
						<ul class="sub-menu">
							<li><a href="menu-01.html">Menu 01</a></li>
							<li><a href="menu-02.html">Menu 02</a></li>
							<li><a href="menu-03.html">Menu 03</a></li>
							<li><a href="product-detail.html">Product Detail</a></li>
						</ul>
					</li>
					<li>
						<a href="reservation-01.html">Reservation</a>
						<i class="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
						<ul class="sub-menu">
							<li><a href="reservation-01.html">Reservation V1</a></li>
							<li><a href="reservation-02.html">Reservation V2</a></li>
							<li><a href="reservation-03.html">Reservation V3</a></li>
						</ul>
					</li>
					<li>
						<a href="about-us.html">About us</a>
					</li>
					<li>
						<a href="shop-page.html">Features</a>
						<i class="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
						<ul class="sub-menu">
							<li><a href="shop-page.html">Shop Page</a></li>
							<li><a href="shopping-cart.html">Shopping Cart</a></li>
							<li><a href="check-out.html">Check Out</a></li>
						</ul>
					</li>
					<li>
						<a href="blog-list-with-sidebar-01.html">Blog</a>
						<i class="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
						<ul class="sub-menu">
							<li><a href="blog-list-with-sidebar-01.html">Blog With Sidebar V1</a></li>
							<li><a href="blog-list-with-sidebar-02.html">Blog With Sidebar V2</a></li>
							<li><a href="blog-mansory.html">Blog Mansory</a></li>
							<li><a href="blog-detail.html">Blog Detail</a></li>
						</ul>
					</li>
					<li>
						<a href="contact-us.html">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	
    </div>
     )
 }
}

export default Header