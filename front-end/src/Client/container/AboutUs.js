import { Component } from "react";
import axios from 'axios';


class About extends Component{
    constructor(props) {
        super(props)
          this.state = {
            data: [],
           
                  }
          }
    componentDidMount() {
        //Get all users details and table columns names in bootstrap table
        axios.get('http://localhost:100/employee/display')
        .then((response) => {
            console.log(response)
            this.setState({

              data: response.data.data
            })
        })
    

        .catch()
    }
    render(){
        return(
            <>
            	<section>
		<div class="bg-title-sub-page bg-menu-page-02 ">
			<div class="wrap-title-sub-page">
				<h2 class="title-l" style ={{color:'black'}}>About Us</h2>
				<h6 class="title-s"> About Us</h6>
			</div>
		</div>
	</section>
    <div class="wrap-intro for-page for-our-food">
		<div class="container">
			<div class="row">
				<div class="wrap-pic-intro col-sm-10 col-md-8 col-lg-5">
					<div class="hover-img wrap-video-about-us">
						<img src="asstes/images/sign.jpg" alt="video-about-us"/>
					</div>
				</div>

				<div class="text-intro col-sm-10 col-md-8 col-lg-7 wow fadeInDown">
					<h3>introduction</h3>
					<h2>Our RMS</h2>
					<p>
						Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate, lectus vel volutpat efficitur, orci lacus sodales sem, at interdum quam ligula sit amet quam.
					</p>
					<p>
						Praesent laoreet malesuada ex, sed blandit sem dictum id. Donec vul-putate ultricies nibh, quis dapibus ex cursus sit amet. Duis non ex pel-lentesque, sollicitudin justo a, porttitor magna. Duis lorem velit, sodales eget posuere in, commodo dictum felis. Aenean leo neque, pharetra vitae dui et, pretium venenatis metus.
					</p>
				</div>

			</div>
		</div>
	</div>

    <section class="team">
		<div class="container">
			
			<div class="wrap-title-event row">
				<div id="title-event" class="col-12">
					<h6>Discover Our</h6>
					<h2>Awesome Staffs</h2>
				</div>
                {this.state.data.map((result) => {
                    return(
				<div class="content-event col-sm-10 col-md-8 col-lg-4 wow fadeInUp" data-wow-delay="0.2s" style ={{textAlign:'center'}}>
					<div class="img-event">
						<a href="/Aboutus"><img alt="123" src={'http://localhost:100/images/' + result.employee_image} style = {{borderRadius:'50%' ,width:'100px', height:'100px'}}/></a>
					</div>
					<h3><a class="hover-link-color" href="/Aboutus">{result.employee_name}</a></h3>
					<h6 class="medium-text">{result.employee_phone}</h6>
					<p>
                    {result.employee_email}
					</p>
				</div>
                    )
                })}
				

				
			</div>			
		</div>
	</section>
            </>
        )
    }
}

export default About