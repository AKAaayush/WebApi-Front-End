import { Component } from "react";


class ContactUs extends Component{
    render(){
        return(

            <>
            <section>
		<div class="bg-title-sub-page bg-menu-page-01">
			<div class="wrap-title-sub-page">
				<h2 class="title-l" style ={{color:'black'}}>Contact Us</h2>
				<h6 class="title-s"> Contact Us</h6>
			</div>
		</div>
	</section>

    
	<section class="content-contact-us">
		<div class="container">
			<div class="row">
				<div class="responsive col-md-10 col-lg-6">
					<h6 class="medium-text">Contact Us</h6>
					<h3 class="larg-text">Get in Touch</h3>
					<p>
						Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate, lectus vel volutpat efficitur, orci lacus sodales sem, at interdum quam ligula sit amet quam.
					</p>
					<ul>
						<li>ADDRESS: Kathamandu Nepal</li>
						<li>FOR BOOKING: 827483000</li>
					
					</ul>
				</div>
				<div class="responsive col-md-10 col-lg-6">
					<div class="messages" id="status"></div>
					<form class="contact-form"  name="contact" id="contact-form">
						<div class="row">
							<div class="wrap-input-contact col-left col-12 col-sm-6 wow fadeInDown" data-wow-delay="0.2s">
								<input class="input-form small-text" type="text" id="name" name="name" placeholder="Your name"/>
								<span class="tooltip-validate special small-text">Name is required</span>
								<span class="symbol-validate special"><i class="fa fa-exclamation" aria-hidden="true"></i></span>
							</div>
							<div class="wrap-input-contact col-right col-12 col-sm-6 wow fadeInDown" data-wow-delay="0.2s">
								<input class="input-form small-text" type="text" id="email" name="email" placeholder="Your email"/>
								<span class="tooltip-validate small-text">Valid email is required (ex@abc.xyz)</span>
							 	<span class="symbol-validate"><i class="fa fa-exclamation" aria-hidden="true"></i></span>
							</div>
							
							<div class="wrap-input-contact col-12 wow fadeInDown" data-wow-delay="0.4s">
								<input class="small-text" type="text" name="subject" placeholder="Subject"/>
							</div>
							<div class="wrap-input-contact col-12 wow fadeInDown" data-wow-delay="0.6s">
								<textarea class="input-form small-text" id="msg" name="msg" placeholder="Your message"></textarea>
								<span class="tooltip-validate small-text">Please, leave us a message</span>
								<span class="symbol-validate"><i class="fa fa-exclamation" aria-hidden="true"></i></span>
							</div>
							<div class="responsive col-6 col-sm-4 wow fadeInDown" data-wow-delay="0.8s">
								<button class="btn-with-bg au-btn" type="submit" id="contactBtn">SUBMIT</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			
		</div>
	</section>
            </>
        )
    }
}

export default ContactUs